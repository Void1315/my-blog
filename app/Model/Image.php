<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Storage;

class Image extends Model
{
    //
    use SoftDeletes;
    public $zipPath;
    /**
     * 创建文章封面图片
     *
     * @param [type] $img
     * @param [type] $show
     * @return void
     * @Description
     * @example
     * @author asahi
     * @since
     */
    public function createArticleImage($img, $show)
    {
        $this->zipPath = config('filesystems.disks.zip_img.root');
        $urlList = $this->saveZipImg($img);
        $this->zip_url = $urlList[0];
        $this->url = $urlList[1];
        $this->to_show = $show;
        $this->save();
        return $this->id;
    }
    /**
     * 创建插入图片
     *
     * @param [type] $img
     * @param [type] $show
     * @return void
     * @Description
     * @example
     * @author asahi
     * @since
     */
    public function saveInsertImg($img, $show)
    {
		$this->zipPath = config('filesystems.disks.zip_img.root');
        $urlList = $this->saveZipImg($img);
        $this->url = $urlList[1];
        $this->zip_url = $urlList[0];
        $this->to_show = $show;
        $this->save();
        return $this;
    }
    /**
     * 保存未压缩文件 与压缩文件
     *
     * @param [type] $img
     * @return void
     * @Description
     * @example
     * @author asahi
     * @since
     */
    public function saveZipImg($img)
    {
        $path = Storage::disk('img')->putFile('', $img);
        $savepath = config('filesystems.disks.img.path') . $path;
        $truepath = Storage::disk('img')->path($path);
        $zip_img_path = zipImage($this->zipPath, $truepath);
        $zip_img_name = pathToFileName($zip_img_path);
        $zip_path = config('filesystems.disks.zip_img.path') . $zip_img_name;
        return array($zip_path, $savepath);
    }

    /**
     * 只保存未压缩文件
     *
     * @param [type] $img
     * @return void
     * @Description
     * @example
     * @author asahi
     * @since
     */
    public function saveImg($img)
    {
        $path = Storage::disk('img')->putFile('', $img);
        $savepath = config('filesystems.disks.img.path') . $path;
        return $savepath;
    }

    public function create($img, $show)
    {
        return $this->createArticleImage($img, $show);
    }

    public function setItems($item_id, $id_list)
    {
        foreach ($id_list as $id) {
            $this->setItem($item_id, $id);
        }
        return true;
    }

    public function setItem($item_id, $id)
    {
        $model = $this->find($id);
        $model->item_id = $item_id;
        $model->save();
    }
}
