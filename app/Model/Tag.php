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
            $model = new Tag;
            if($this->where("name",$tag)->first())
                array_push($id_list,$this->where("name",$tag)->first()->id);
            else{
                $model->name = $tag;
                $model->save();
                array_push($id_list,$model->id); 
            }
    	}
    	return $id_list;
    }

}
