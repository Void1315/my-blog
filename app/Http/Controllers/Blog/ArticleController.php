<?php

namespace App\Http\Controllers\Blog;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\Article;
use App\Model\Tag;
use App\Model\ArticleTag;
use App\Model\Image;
class ArticleController extends Controller
{
    //
    public $articleModel;
    public $tagModel;
    public $a_tModel;
    public $imageModel;
    public function __construct(){
    	$this->articleModel = new Article();
    	$this->tagModel = new Tag();
    	$this->a_tModel = new ArticleTag();
    	$this->imageModel = new Image();
    }
    

    public function index(Request $request){
      $total = $this->articleModel->count();
      $page = $request->page;
      if(!$request->page)
        $page = 1;
      $pageNum = 15;
      $offset = ($page-1)*$pageNum;
      $limit = ($page)*$pageNum;
      $data = $this->articleModel->offset($offset)->limit($limit)->get()->each(function($item){
        $item->image;
      });
      $dataset = collect()->put("total",$total)->put("data",$data);
      return $dataset;
    }


    public function create(Request $request){//增加一篇文章
    	$this->validate($request, [
    		'title' => "required|string|max:50",
    		'text' => "required|string",
    		'tages' => "required|array",
    		"img_id" => "required|integer"//文章封面
   		]);
   		$id_list = $this->tagModel->createTages($request->tages);
   		$id = $this->articleModel->createOne($request->title,$request->text,$request->img_id);
   		$this->a_tModel->articleTag($id,$id_list);
   		return response(NULL, 200);
    }

    public function delete(Request $request){//软删除一篇文章
      if($this->articleModel->deleteThis($request->id))
        return response(NULL, 200);
      else
        return response(NULL, 445);
    }

    public function solidDelete(Request $request){//硬删除一篇文章
      if($this->articleModel->solidDeleteThis($request->id))
        return response(NULL, 200);
      else
        return response(NULL, 445);
    }

    public function edit(Request $request){
      $this->validate($request,[
        'title' => "required|string|max:50",
        'text' => "required|string",
        'tages' => "required|array",
        "img_id" => "required|integer"
      ]);
      $this->a_tModel->deleteWithAid($request->id);//删除原有关系
      $id_list = $this->tagModel->createTages($request->tages);
      $this->articleModel->edit($request->id,$request->title,$request->text,$request->img_id);
      $this->a_tModel->articleTag($request->id,$id_list);
      return json_encode($id_list);
    }

    public function indexOverView(){
      return $this->articleModel->overView();
    }

    public function articleGet(Request $request){
      return $this->articleModel->oneView($request->id);
    }

    public function adminArticleGet(Request $request){
      return $this->articleModel->adminOneView($request->id);
    }

    public function assent(Request $request){
      $theArticle = $this->articleModel->find($request->id);
      $theArticle->assent = $theArticle->assent+1;
      $theArticle->save();
      return response(NULL, 200);
    }

    public function recycleBinShow(Request $request){
      $data = $this->articleModel->onlyTrashed()->get();
      return response()->json($data);
    }

}
