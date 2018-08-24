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

    public function image()
    {
        return $this->hasOne('App\Model\Image', 'id', 'img_id');
    }

    public function overView(){
        return $this->all()->each(function($item, $key){
            $item->img_url = Image::find($item->img_id)->zip_url;
            $item->tages = $item->tages;
        });
    }

    public function tages(){
        return $this->belongsToMany('App\Model\Tag',"tages_article","article_id","tag_id");
    }

    public function oneView($id){
        $thisOne = $this->find($id);
        $thisOne->img_url = Image::find($thisOne->img_id)->url;
        $thisOne->tages = $thisOne->tages;
        return $thisOne;

    }

}
