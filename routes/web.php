<?php

use App\Http\Controllers\EntryController;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::group([
  'as' => 'site.',
], function () {

  Route::get('/', [HomeController::class, 'index'])->name('home');
  Route::get('/a', [HomeController::class, 'index'])->name('a');

  Route::resource('entries', EntryController::class);
});