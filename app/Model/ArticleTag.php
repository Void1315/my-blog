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
            $model = new ArticleTag;
    		$model->article_id = $article_id;
    		$model->tag_id = $tag_id;
    		$model->save();
    	}
    }

    public function deleteWithAid($id){
        $this->where("article_id",$id)->delete();
    }

}
