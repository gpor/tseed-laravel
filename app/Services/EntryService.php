<?php
namespace App\Services;

use App\Models\Entry;


class EntryService
{
    public static function entriesWithchildren($rootId)
    {
        return Entry::whereParentId($rootId)
            ->whereUserId(self::userId())
            ->with('entries')
            ->orderBy('pos')
            ->get();
    }

    private static function userId()
    {
        if (config('dev.bypassAuth')) {
            return 1;
        } else {
            return auth()->user()->id;
        }
    }
    
    public static function createEntry($parentId, $pos, $content)
    {
        return Entry::create([
            'content' => $content,
            'parent_id' => $parentId,
            'pos' => $pos,
            'user_id' => self::userId()
        ]);
    }

    public static function updateEntry($id, $data)
    {
        $entry = Entry::find($id);
        foreach ($data as $fName => $val) {
            $entry->$fName = $val;
        }
        return $entry->save();
    }

    public static function insertEntry($moved, $parent, $pos)
    {
        $oldSiblings = Entry::whereParentId($moved->parent_id)->whereUserId(self::userId())->orderBy('pos')->get();
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
                if ( ! $sib->save()) {
                    return false;
                }
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
        return $moved->save();
    }
}
