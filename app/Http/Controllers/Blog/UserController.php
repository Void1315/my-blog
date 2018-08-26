<?php

namespace App\Http\Controllers\Blog;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    //
    public $userModel;
    public function __construct(){
    	$this->userModel = new User();
    }

    public function login(Request $request){
    	$this->validate($request, [
    		"email" => "required|email",
    		"password" => "required"
    	]);
    	if (Auth::attempt(['email' => $request->email, 'password' => $request->password], true)) {
		    return "200";
		}
		else
			return "422";
    }

    public function init(){
    	$this->userModel->name = "Asahi";
    	$this->userModel->email = "381848900@qq.com";
    	$this->userModel->password = Hash::make("wqld1315");
    	$this->userModel->info = "aaa";
    	$this->userModel->sex = "男";
    	$this->userModel->info_text = "aaa";
    	$this->userModel->save();
    	return true;
    }

    public function checkUser(){
    	if(Auth::check())
    		return "200";
    	else
    		return "422";
    }

}
