<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *填充一个初始账户
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'asahi',
            'email' => '381848900@qq.com',
            'password' => '$2y$10$aqBi8kB/9G4VzdfuFeASNe1DSCP/OTUqM2hpaBSbPIw...',//密码是： wqld1315
        ]);
    }
}
