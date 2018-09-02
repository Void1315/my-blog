<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class ImgItem extends Model
{
    //
    protected $table = 'imgitems';
	public function createItem($info){
		$this->info = $info;
		$this->save();
		return $this->id;
	}

	public function showItem(){
		$all = $this->all();
		$all = $all->each(function ($item, $key) {
			$item->images;
		});
		return $all;
	}

	public function images(){
        return $this->hasMany('App\Model\Image', 'item_id');
    }
}
