<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\MedicationHistory;

class MedicationHistoryController extends Controller
{
    public function storeFamilyHealthHistory(Request $request)
    {
        $user = $request->user;
        $request->validate([
            'name' => 'required|string',
            'description' => 'required|string',
        ]);

        $medicationHistory = MedicationHistory::create([
            'name' => $request->name,
            'patient_id' => $user->id,
            'description' => $request->description,
            'type' => 'FAMILYHEALTH', // Set the type directly here
        ]);

        return response()->json($medicationHistory, 201);
    }
    public function storeSurgeriesHistory(Request $request)
    {
        $user = $request->user;
        $request->validate([
            'name' => 'required|string',
            'date' => 'required|date',
            'description' => 'required|string',
        ]);

        $medicationHistory = MedicationHistory::create([
            'name' => $request->name,
            'patient_id' => $user->id,
            'date' => $request->date,
            'description' => $request->description,
            'type' => 'SURGEY', // Set the type directly here
        ]);

        return response()->json($medicationHistory, 201);
    }
    public function storePastIllnessHistory(Request $request)
    {
        $user = $request->user;
        $request->validate([
            'name' => 'required|string',
            'date' => 'required|date',
            'description' => 'required|string',
        ]);

        $medicationHistory = MedicationHistory::create([
            'name' => $request->name,
            'patient_id' => $user->id,
            'date' => $request->date,
            'description' => $request->description,
            'type' => 'PASTILLNESS', // Set the type directly here
        ]);

        return response()->json($medicationHistory, 201);
    }

    public function storeAllergiesHistory(Request $request)
    {

        $user = $request->user;


        $medicationHistory = MedicationHistory::where('patient_id' , $user->id)->where('type' , 'ALLERGIES');
        $medicationHistory->delete();
        
        $request->validate([
            'allergies' => 'required',
        ]);

        $allegies= $request->allergies;
        $allegies_array = [];
            foreach ($allegies as $item) {
                $allegies_array[] = $item['name'];
        }
        $commaSeparatedallegies = implode(',', $allegies_array);

        $medicationHistory = MedicationHistory::create([
            'name' => 'Allergies',
            'patient_id' => $user->id,
            'description' => $commaSeparatedallegies,
            'type' => "ALLERGIES", // Set the type directly here
        ]);

        return response()->json($medicationHistory, 201);
    }


    public function getMedicationHistoryByUserandType(Request $request,$type,$id)
    {
        $medicationhistory = medicationhistory::where('patient_id', $id )->where('type', strtoupper($type))
        ->join('users', 'medication_histories.patient_id', '=', 'users.id')
        ->select(
            'medication_histories.*',
            'users.firstname as user_firstname',
            'users.lastname as user_lastname',
            'users.email as user_email',
        )
        ->get();
        return response()->json($medicationhistory);
    }

    public function getMedicationHistoryByAuthenticatedUserandType(Request $request, $type)
    {
        $user=$request->user;
        $medicationhistory = medicationhistory::where('patient_id', $user->id )->where('type', strtoupper($type))
        ->join('users', 'medication_histories.patient_id', '=', 'users.id')
        ->select(
            'medication_histories.*',
            'users.firstname as user_firstname',
            'users.lastname as user_lastname',
            'users.email as user_email',
        )
        ->get();
        return response()->json($medicationhistory);
    }



    public function getAllergiesByUser(Request $request)
    {
        $allergies = medicationhistory::where('patient_id', $id )->where('type', 'ALLERGIES')->first();



        $allergyNames = explode(',', $allergies->description);
        $index = 0;
        $allergiesArray = [];
        foreach ($allergyNames as $allergyName) {
            $allergiesArray[] = [
                'name' => $allergyName,
                'index' => $index
            ];
            $index++;
        }



        return response()->json($allergiesArray);
    }


    public function getAllergiesByAuthenticatedUser(Request $request)
    {

        $user=$request->user;
        $allergies = medicationhistory::where('patient_id', $user->id )->where('type', 'ALLERGIES')->first();



        $allergyNames = explode(',', $allergies->description);
        $index = 0;
        $allergiesArray = [];
        foreach ($allergyNames as $allergyName) {
            $allergiesArray[] = [
                'name' => $allergyName,
                'index' => $index
            ];
            $index++;
        }



        return response()->json($allergiesArray);
    }
    
    public function destroy($id)
    {
        $medicationHistory = MedicationHistory::findOrFail($id);
        $medicationHistory->delete();
        return response()->json(['message' => 'Deleted successfully']);
    }
}
