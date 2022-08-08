<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Entry;
use App\Services\EntryService;
use Illuminate\Http\Request;

class GeneralController extends Controller
{
    public function entriesWithChildren(Request $request)
    {
        $rootId = $request->get('rootId');
        if ( ! $rootId) {
            $rootId = config('entries.ids.primary');
        }
        return response()->json(EntryService::entriesWithChildren($rootId));
    }


    public function insertEntry(Request $request)
    {
        $success = EntryService::insertEntry(
            Entry::find($request->get('moved')),
            Entry::find($request->get('parent')),
            $request->get('pos')
        );

        return response()->json([
            'success' => $success,
        ]);
    }

    public function createEntry(Request $request)
    {
        $pos = $request->get('pos');
        $parentId = $request->get('parent');
        $newEntry = Entry::create([
            'content' => $request->get('content'),
            'parent_id' => $parentId,
            'pos' => $pos,
        ]);
        $success = EntryService::insertEntry(
            $newEntry,
            Entry::find($parentId),
            $pos
        );
        return response()->json($newEntry);
    }

    public function updateEntry(Request $request)
    {
        $success = EntryService::updateEntry(
            $request->get('id'),
            $request->except('id')
        );
        return response()->json([
            'success' => $success,
        ]);
    }
    
    public function deleteEntry(Request $request)
    {
        $entry = Entry::findOrFail($request->get('id'));
        $entry->delete();
        return response()->json([
            'success' => true,
        ]);
    }
}
