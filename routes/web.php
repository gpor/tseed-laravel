<?php

use App\Http\Controllers\Site\EntryController;
use App\Http\Controllers\Api\GeneralController;
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

  Route::get('/', [EntryController::class, 'index'])->name('home');
  Route::resource('entries', EntryController::class);
});
Route::group([
  'as' => 'api.',
  'prefix' => 'api/',
], function () {

  // Route::get('/entries-with-children', [GeneralController::class, 'entriesWithChildren'])->name('entries-with-children');

  // Route::patch('/remove-entry', [GeneralController::class, 'removeEntry'])->name('remove-entry');
  Route::post('/insert-entry', [GeneralController::class, 'insertEntry'])->name('insert-entry');
  // Route::get('/entries-with-children-primary', [EntryController::class, 'entriesWithChildrenPrimary'])->name('entries-with-children-primary');
});
