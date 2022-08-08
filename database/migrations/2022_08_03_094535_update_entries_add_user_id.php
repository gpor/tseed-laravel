<?php

use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Schema;

class UpdateEntriesAddUserId extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        User::firstOrCreate([
            'name' => 'Lee',
            'email' => 'lee.m.stevens@gmail.com',
            'password' => Hash::make('qweqwe'),
        ]);
        Schema::table('entries', function (Blueprint $table) {
            $table->unsignedBigInteger('user_id')->default(1)->after('id');
            $table->foreign('user_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('entries', function (Blueprint $table) {
            $table->dropColumn('user_id');
        });
    }
}
