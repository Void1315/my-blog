<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    //
    public function test(){
    	return "code 200!";
    }

    public function createOne($title,$text,$img_id){
    	$this->title = $title;
    	$this->text = $text;
    	$this->img_id = $img_id;
    	$this->save();
    	return $this->id;
    }
}
