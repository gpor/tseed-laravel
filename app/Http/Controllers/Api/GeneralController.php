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
        $entries = Entry::whereParentId($rootId)->whereUserId(auth()->user()->id)->with('entries')->orderBy('pos')->get();
        return response()->json($entries);
    }

    public function insertEntry()
    {
        $pos = request('pos');
        $moved = Entry::find(request('moved'));
        $parent = Entry::find(request('parent'));

        $oldSiblings = Entry::whereParentId($moved->parent_id)->where('user_id', auth()->user()->id)->orderBy('pos')->get();
        $preMatch = true;
        $oldSiblingsLeftOver = [];
        foreach($oldSiblings as $i => $sib) {
            if ($preMatch) {
                if ($sib->id === $moved->id) {
                    $preMatch = false;
                } else {
                    $oldSiblingsLeftOver[] = $sib;
                }
            } else {
                $sib->pos = $i - 1;
                $oldSiblingsLeftOver[] = $sib;
                $sib->save();
            }
        }

        if ($moved->parent_id === $parent->id) {
            $newSiblings = $oldSiblingsLeftOver;
        } else {
            $newSiblings = $parent->entries;
        }
        $postInserted = false;
        foreach ($newSiblings as $i => $sib) {
            if ($i === $pos) {
                $postInserted = true;
            }
            if ($postInserted) {
                $sib->pos = $i + 1;
                $sib->save();
            }
        }

        $moved->pos = $pos;
        $moved->parent_id = $parent->id;
        $moved->save();

        return response()->json([
            'success' => true,
        ]);
    }
}
