<?php

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
//     return view('welcome');
// });

Auth::routes();

// Route::get('/home', 'HomeController@index')->name('home');
Route::namespace('Blog')->group(function () {
    // 在 "App\Http\Controllers\Blog" 命名空间下的控制器
	Route::post('/create/article','ArticleController@create');
	Route::post("/create/image",'ImageController@create');
	Route::get("/admin/article/list","ArticleController@index");
});
Route::get("/",function(){
	return view('index');
});
