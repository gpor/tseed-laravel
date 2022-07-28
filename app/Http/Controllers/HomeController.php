<?php

namespace App\Http\Controllers;

use App\Models\Entry;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    //
    public function index()
    {
        $entries = Entry::whereParentId(config('entries.ids.primary'))->get();
        return view('entries', [
          'entries' => $entries,
        ]);
    }
}
