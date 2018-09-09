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
      $self = $this;
      return $this->articleModel->all(["id","title","assent","deleted_at","created_at","img_id"])->each(function($item,$index){
        $item->image;
      });
    }


    public function create(Request $request){
    	$this->validate($request, [
    		'title' => "required|string|max:50",
    		'text' => "required|string",
    		'tages' => "required|array",
    		"img_id" => "required|integer"
   		]);
   		$id_list = $this->tagModel->createTages($request->tages);
   		$id = $this->articleModel->createOne($request->title,$request->text,$request->img_id);
   		$this->a_tModel->articleTag($id,$id_list);
   		return "200!";
    }

    public function edit(Request $request){
      $this->validate($request,[
        'title' => "required|string|max:50",
        'text' => "required|string",
        'tages' => "required|array",
        "img_id" => "required|integer"
      ]);
      $this->a_tModel->deleteWithAid($request->id);
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

    public function assent(Request $request){
      $theArticle = $this->articleModel->find($request->id);
      $theArticle->assent = $theArticle->assent+1;
      $theArticle->save();
      return "200";
    }
}
