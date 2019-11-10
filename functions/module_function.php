<?php

function pathToFileName($path) //返回文件名字带后缀

{
    $filename = explode('/', $path);
    $filename = end($filename);
    return $filename;
}

function pathToFileType($path)
{
    $filename = pathToFileName($path);
    $fileType = explode('.', $filename);
    return end($fileType);
}

function zipImage($zipPath, $path)
{

    $img = Image::make($path);
    $height = $img->height();
    $width = $img->width();
    $rate = 1.0;
    if ($width >= 2000 || $height >= 2000)
        $rate = 0.3;
    elseif($width >= 1000 || $height >= 1000)
        $rate = 0.4;
    elseif ($width >= 500 || $height >= 500)
        $rate = 0.6;
    $img->resize($width * $rate, $height * $rate)->save($zipPath.'/'.pathToFileName($path));
    return pathToFileName($path);
}

function axiosData($data = null, $status = 200, $statusText = 'OK')
{
    $arr = array('data' => $data, 'status' => $status, 'statusText' => $statusText);
    return json_encode($arr);
}
