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
        $success = EntryService::insertEntry(
            Entry::create([
                'content' => $request->get('content'),
                'parent_id' => $parentId,
                'pos' => $pos,
            ]),
            Entry::find($parentId),
            $pos
        );

        return response()->json([
            'success' => $success,
        ]);

    }
}
