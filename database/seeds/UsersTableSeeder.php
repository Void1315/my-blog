<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *填充一个初始账户1
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'asahi',
            'email' => '381848900@qq.com',
            'password' => Hash::make("wqld1315"),//密码是： wqld1315
        ]);
    }
}
