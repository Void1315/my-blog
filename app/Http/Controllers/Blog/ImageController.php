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

    /**
     * 显示分页数据
     *
     * @param Request $request
     * @return void
     * @Description
     * @example
     * @author asahi
     * @since
     */
    public function listShow(Request $request){
        if($request->to_show == -1){
            return $this->imageModel->paginate($request->page_sizes);
        }
        return $this->imageModel->where("to_show",$request->to_show)->paginate($request->page_sizes);
    }

    public function upload(Request $request){
        $this->validate($request,[
            "image" => "required|image"
        ]);
        $arr_url = $this->imageModel->saveInsertImg($request->image,0)->url;
        return json_encode(array("errno"=>0,"data"=>array($arr_url)));
    }

    public function recycleBinShow(Request $request){//回收站展示
      $data = $this->imageModel->onlyTrashed()->get();
      return response()->json($data);
    }
    
    /**
     * 删除图片
     *  POST
     * @param Request $request
     * @return void
     * @Description
     * @example
     * @author asahi
     * @since
     */
    public function deleteImage(Request $request){
        $image_id = $request->image_id;//图片ID
        $image = $this->imageModel->find($image_id);
        $item_id = $image->item_id;
        $image->delete();
        if($this->imageModel->where("item_id",$item_id)->count() == 0){
            //如果图片组里的图片全部删除完 则删除图片组
            $this->itemModel->find($item_id)->delete();
        }
        $data = array(
            "code"=>"200",
            "msg"=>"success",
            "data"=>$image_id
        );
        return $data;
    }

}
