<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\Entry;

class CreateEntriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('entries', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('parent_id')->nullable();
            $table->string('content', 255);
            $table->unsignedSmallInteger('pos');
            $table->timestamps();

            $table->foreign('parent_id')->references('id')->on('entries');

        });
        $primary = Entry::create([
            'id' => 1,
            'parent_id' => null,
            'content' => 'primary',
            'pos' => 0,
        ]);
        $tags = Entry::create([
            'id' => 2,
            'parent_id' => null,
            'content' => 'tags',
            'pos' => 1,
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('entries');
    }
}
