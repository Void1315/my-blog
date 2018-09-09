<?php

namespace App\Http\Controllers\Blog;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\Image;
use App\Model\ImgItem;
class ImageController extends Controller
{
    //
    public $imageModel;
    public $itemModel;
    public function __construct(){
    	$this->imageModel = new Image();
        $this->itemModel = new ImgItem();
    }

    public function create(Request $request){
    	$this->validate($request, [
    		"img" => "required|image",
            "show" => "required|boolean"
    	]);
    	return $this->imageModel->create($request->img,$request->show);
    }

    public function createItem(Request $request){
        $this->validate($request, [
            "idList" => "required|array",
            "info" => "string|max:140|nullable"
        ]);
        $item_id = $this->itemModel->createItem($request->info);
        if($this->imageModel->setItems($item_id,$request->idList))
            return "200";
        else
            return "422";
    }

    public function showItem(){
        $data = $this->itemModel->showItem();
        return $data;
    }

    public function listShow(){
        return $this->imageModel->all();
    }

    public function upload(Request $request){
        $this->validate($request,[
            "image" => "required|image"
        ]);
        $arr_url = $this->imageModel->saveInsertImg($request->image,0)->url;
        return json_encode(array("errno"=>0,"data"=>array($arr_url)));
    }

}
