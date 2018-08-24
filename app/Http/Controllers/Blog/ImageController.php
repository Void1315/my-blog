<?php

namespace App\Http\Controllers\Blog;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\Image;

class ImageController extends Controller
{
    //
    public $imageModel;
    public function __construct(){
    	$this->imageModel = new Image();
    }

    public function create(Request $request){
    	$this->validate($request, [
    		"img" => "required|image"
    	]);
    	return $this->imageModel->create($request->img);
    }
}
