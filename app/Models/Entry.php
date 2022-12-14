<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Entry extends Model
{
    use HasFactory;

    protected $fillable = ['id', 'parent_id', 'content', 'pos', 'user_id'];

    public function entries()
    {
        return $this->hasMany(Entry::class, 'parent_id')->orderBy('pos');
    }

    public function parent()
    {
        return $this->hasOne(Entry::class, 'id', 'parent_id');
    }
}
