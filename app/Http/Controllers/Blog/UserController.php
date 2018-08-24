<?php

namespace App\Http\Controllers\Blog;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\User;

class UserController extends Controller
{
    //
    public $userModel;
    public function __construct(){
    	$this->userModel = new User();
    }
}
