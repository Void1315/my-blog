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
	Route::get("/article/overview","ArticleController@indexOverView");//首页文章缩略
	Route::get("/article/get/{id}","ArticleController@articleGet");//查看文章
	Route::post("/login","UserController@login");
	Route::any("/check","UserController@checkUser");
	Route::post("/article/assent","ArticleController@assent");
	Route::get("/image/item","ImageController@showItem");//图片时间轴展示接口

	
	Route::get("/yhy1315/init","UserController@init");//这是一个初始化账户的命令
});
Route::middleware(['auth'])->namespace('Blog')->group(function(){
	Route::get("/admin/article/get/{id}","ArticleController@adminArticleGet");//可以获取软删除数据
	Route::get("/admin/article/list","ArticleController@index");
	Route::get("/admin/article/delete/{id}","ArticleController@delete");//软删除文章
	Route::get("/admin/article/solid/delete/{id}","ArticleController@solidDelete");//硬删除文章
	Route::get("/admin/article/recyclebin/index","ArticleController@recycleBinShow");//文章回收站展示
	Route::get("/admin/image/recyclebin/index","ImageController@recycleBinShow");//图片回收站展示
	Route::any("/admin/image/list","ImageController@listShow");//图片管理分页
	Route::post("/admin/image/delete","ImageController@deleteImage");//删除图片
	Route::get("/admin/type/list","TagController@show");
	Route::post('/create/article','ArticleController@create');//创建文章
	Route::post("/edit/article/{id}","ArticleController@edit");//修改文章
	Route::post("/create/image",'ImageController@create');//创建文章封面
	Route::post("/upload/image","ImageController@upload");//上传图片 与上面接口返回值不同
	Route::post("/create/imgitem","ImageController@createItem");
	
});
Route::get("/",function(){
	return view('index');
});
