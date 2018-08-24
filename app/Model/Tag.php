<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
class Tag extends Model
{
    //
    protected $table = 'tages';
    public $timestamps = false;

    public function createTages($tages){
        $id_list = array();
    	foreach($tages as $tag){
    		$this->name = $tag;
    		$this->save();
            array_push($id_list,$this->id);
    	}
    	return $id_list;
    }
}
