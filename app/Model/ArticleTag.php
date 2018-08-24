<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class ArticleTag extends Model
{
    //
    protected $table = 'tages_article';
    public $timestamps = false;

    public function articleTag($article_id,$tages_id){
    	foreach ($tages_id as $tag_id) {
    		$this->article_id = $article_id;
    		$this->tag_id = $tag_id;
    		$this->save();
    	}
    }

}
