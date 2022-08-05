<?php

namespace App\Http\Controllers\Site;

use App\Http\Controllers\Controller;
use App\Models\Entry;
use Illuminate\Http\Request;

class EntryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // dd(request()->get('panels'));
        $entriesQ = request()->get('panels');
        // panels=1_1-4_1
        if ($entriesQ) {
            $ids = [];
            $panels = explode('_', $entriesQ);
            foreach ($panels as $panel) {
                $ids[] = explode('-', $panel)[0];
            }
        } else {
            $ids = [config('entries.ids.primary')];
        }
        $entries = [];
        foreach ($ids as $id) {
            $entries[] = Entry::find($id);
        }
        return view('entries', [
          'entries' => $entries,
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return self::entriesView($id);
    }

    private function entriesView($id)
    {
        $rootEntry = Entry::find($id);
        return view('entries', [
          'rootEntry' => $rootEntry,
        ]);
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
