<?php

namespace App\Http\Controllers\Blog;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\Tag;

class TagController extends Controller
{
    //

    public $tagModel = null;

    public function __construct(){
    	$this->tagModel = new Tag();
    }


    public function createTages(Request $request){
    	$this->validate($request, [
    		'tages' => "required|array"
   		]);
   		return $this->tagModel->createTages($request->tages);
    }
}
