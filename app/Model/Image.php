<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
class Image extends Model
{
    //
	public $zipPath;

	public function createArticleImage($img,$show){
		$this->zipPath = config('filesystems.disks.zip_img.root');
		$urlList = $this->saveZipImg($img);
		$this->zip_url = $urlList[0];
		$this->url = $urlList[1];
		$this->to_show = $show;
		$this->save();
		return $this->id;
	}

	public function saveZipImg($img){
		$path = Storage::disk('img')->putFile('',$img);
		$savepath = config('filesystems.disks.img.path').$path;
		$truepath = Storage::disk('img')->path($path);
		$zip_img_path = zipImage($this->zipPath,$truepath);
		$zip_img_name = pathToFileName($zip_img_path);
		$zip_path = config('filesystems.disks.zip_img.path').$zip_img_name;
		return array($zip_path,$savepath);
	}

	public function saveImg($img){
		$path = Storage::disk('img')->putFile('',$img);
		$savepath = config('filesystems.disks.img.path').$path;
		return $savepath;
	}

	public function create($img,$show){
		return $this->createArticleImage($img,$show);
		// return "200!";
	}

	public function setItems($item_id,$id_list){
		foreach ($id_list as $id) {
			$this->setItem($item_id,$id);
		}
		return true;
	}

	public function saveInsertImg($img,$show){
		$path = $this->saveImg($img);
		$this->url = $path;
		$this->to_show = $show;
		$this->save();
		return $this;
	}

	public function setItem($item_id,$id){
		$model = $this->find($id);
		$model->item_id = $item_id;
		$model->save();
	}
}
