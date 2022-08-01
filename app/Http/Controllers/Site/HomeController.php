<?php

namespace App\Http\Controllers\Site;

use App\Http\Controllers\Controller;
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
