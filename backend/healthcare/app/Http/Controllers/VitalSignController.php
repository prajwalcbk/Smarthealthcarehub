<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\VitalSign;

class VitalSignController extends Controller
{
    public function store(Request $request)
    {
        $user = $request->user;

        $request->validate([
            'bloodpressure' => 'required|string',
            'date' => 'required|date',
            'heartrate' => 'required|string',
            'bloodsugar' => 'required|string',
        ]);

        $vitalSign = VitalSign::create([
            'bloodpressure' => $request->bloodpressure,
            'date' =>  $request->date,
            'heartrate' => $request->heartrate,
            'bloodsugar' =>  $request->bloodsugar,
            'user_id' => $user->id
        ]);

        return response()->json($vitalSign, 201);
    }

    public function destroy($id)
    {
        $vitalSign = VitalSign::findOrFail($id);
        $vitalSign->delete();

        return response()->json(['message' => 'vitalSign data deleted successfully']);
    }

    public function getByUser(Request $request)
    {
        $user = $request->user;
        $vitalSigns = VitalSign::where('user_id', $user->id)
            ->join('users', 'vital_signs.user_id', '=', 'users.id')
            ->select(
                'vital_signs.*',
                'users.firstname as user_firstname',
                'users.lastname as user_lastname',
                'users.email as user_email',
            )
            ->get();
        return response()->json($vitalSigns);
    }
}
