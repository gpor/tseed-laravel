<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Entry;
use Illuminate\Http\Request;

class GeneralController extends Controller
{
    public function entriesWithChildren()
    {
        $rootId = request('rootId');
        if ( ! $rootId) {
            $rootId = config('entries.ids.primary');
        }
        $entries = Entry::whereParentId($rootId)->with('entries')->get();
        return response()->json($entries);
    }

    public function insertEntry()
    {
        $pos = request('pos');

        $moved = Entry::find(request('moved'));
        $parent = Entry::find(request('parent'));

        // dd($moved->content, $moved->parent_id, $parent->content);

        $oldSiblings = Entry::where('parent_id', $moved->parent_id)->orderBy('pos')->get();
        // dd('$oldSiblings', $oldSiblings);
        $preMatch = true;
        foreach($oldSiblings as $i => $sib) {
            if ($preMatch) {
                if ($sib->id === $moved->id) {
                    $preMatch = false;
                }
            } else {
                $sib->pos = $i - 1;
                // todo update save
            }
        }

        // todo
        // insert into $parent->entries at $pos


        return response()->json([
            'success' => true,
        ]);
    }
}
