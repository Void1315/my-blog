<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
class Image extends Model
{
    //
	public $zipPath;

	public function createArticleImage($img){
		$this->zipPath = config('filesystems.disks.zip_img.root');
		$urlList = $this->saveZipImg($img);
		$this->zip_url = $urlList[0];
		$this->url = $urlList[1];
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

	public function create($img){
		return $this->createArticleImage($img);
		// return "200!";
	}

}
