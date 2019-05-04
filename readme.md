##自己用来学习vue与laravel搭建的个人blog
*搭建流程*  
1. clone到本地
```
git clone git@github.com:Void1315/my-blog.git
```
2. 下载必要文件
```
composer install
npm install //或推荐cnpm install
```
3. 创建.env文件设置您的mysql数据库等操作
```
cp .env.example .env
```
4. 生成laravel key
```
php artisan key:generate;
```
5. 运行数据库迁移
```
php artisan migrate
```
6. nginx配置
```
server {
    listen 80;
    server_name l.vue-blog.yuhaoyan.cn;#此项改为你的域名 若无域名则随便起一个 然后再hosts文件中代理到127.0.0.1
    rewrite ^(.*) https://$server_name$1 permanent;
}
server {
 listen 443;#监听的端口
 server_name l.vue-blog.yuhaoyan.cn;
 root /var/www/my-blog/public;#改为你项目/piblic 路径
 ssl on;
 ssl_certificate  /home/asahi/文档/ssl证书/l.vue-blog.yuhaoyan.cn/2148558_l.vue-blog.yuhaoyan.cn.pem;# 改成你的证书的名字
 ssl_certificate_key /home/asahi/文档/ssl证书/l.vue-blog.yuhaoyan.cn/2148558_l.vue-blog.yuhaoyan.cn.key;# 你的证书的名字
 ssl_session_timeout 5m;
 ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
 ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
 ssl_prefer_server_ciphers on;

 location / {
  root /var/www/my-blog/public/;#此项改为 你的项目/public 路径
  try_files $uri $uri/ /index.php?$query_string;
  index index.php index.html index.htm;
 }

 location ~ \.php$ {
  root /var/www/my-blog/public/;
  include fastcgi_params;
  #注释 下面是你的php-fpm配置 请按照你的来设置此项
  fastcgi_pass  127.0.0.1:9000;#这个端口号是php-fpm的端口，默认为9000
# fastcgi_pass  unix:/var/run/php-fpm/php-fpm.sock;
  #end 注释
  fastcgi_index index.php;
  fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;

 }
 error_page 404 /index.php;
 location ~ /\.ht {
  deny all;
 }
}
```
7. 打包前端js文件
`npm run build`
8. 创建用户
> 因为还没有写创建用户页面，所以先用接口代替。
> 项目部署好后 url输入/yhy1315/init
> 将会生成一个
> 账户名为381848900@qq.com
> 密码为wqld1315
> 的账号。
> 