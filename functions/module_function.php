<?php 


function pathToFileName($path)//返回文件名字带后缀
{
    $filename = explode('/', $path);
    $filename = end($filename);
    return $filename;
}

function pathToFileType($path)
{
    $filename = pathToFileName($path);
    $fileType = explode('.',$filename);
    return end($fileType);
}

function zipImage($zipPath,$path)
{
	// $pythonPath = "/usr/bin/python3 /var/www/vue-blog/resources/assets/python/main.py";
    $pythonPath = "/usr/bin/python3 ".base_path()."/resources/assets/python/main.py";
	$cmd_str = $pythonPath." ".$zipPath." ".$path;
	$str = exec($pythonPath." ".$zipPath." ".$path);
	// return $str;
	return $cmd_str;
}


function axiosData($data=NULL, $status=200, $statusText='OK')
{
    $arr = array('data' => $data, 'status' => $status, 'statusText' => $statusText);
    return json_encode($arr);
}