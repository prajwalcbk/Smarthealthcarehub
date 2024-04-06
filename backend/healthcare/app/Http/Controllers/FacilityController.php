<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Facility;

class FacilityController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'location' => 'required|string',
            'services' => 'required|string',
            'status' => 'nullable|in:Active,InActive',
            'description' => 'required|string',
        ]);

        $facility = Facility::create($request->all());
        return response()->json($facility, 200);
    }

    public function getAll()
    {
        $facilities = Facility::all();
        return response()->json($facilities);
    }


    public function searchFacility(Request $request)
    {

        $name = $request->input('name');

        $facility = Facility::query();

        if ($name) {
            $facility->where('name', 'like', '%' . $name . '%');
        }



        // Execute the query and retrieve the results
        $results = $facility->get();

        // Return the results as JSON response
        return response()->json($results);
    }
}
