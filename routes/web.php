<?php

use App\Http\Controllers\BuyController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/test',function(){
    return Inertia::render('Test');
});
Route::get('/areas',function(){
    return Inertia::render('Areas');
});
Route::get('/developers',function(){
    return Inertia::render('Developers');
});
Route::get('/buy',function(){
    return Inertia::render('Buy');
});
Route::get('/rent',function(){
    return Inertia::render('Rent');
});
Route::get('/projects',function(){
    return Inertia::render('Project');
});

Route::get('/area/{slug}',function(string $slug){
    return Inertia::render('Area');
});
Route::get('/developer/{slug}',function(string $slug){
    return Inertia::render('Developer');
});
Route::get('/buy/{slug}',function(string $slug){
    return Inertia::render('BuyProperty');
});
Route::get('/rent/{slug}',function(string $slug){
    return Inertia::render('RentProperty');
});
Route::get('/project/{slug}',function(string $slug){
    return Inertia::render('ProjectProperty');
});
Route::get('/playground',function(){
    return Inertia::render('Playground');
});
Route::get('/',[HomeController::class,'index']);
// Route::get('buy',[BuyController::class,'index']);

require __DIR__.'/auth.php';
