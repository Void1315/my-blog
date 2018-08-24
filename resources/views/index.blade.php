<!DOCTYPE html>
<html>
<head>
	<title>Blog</title>
	<meta name="csrf-token" content="{{ csrf_token() }}">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	
	<link href="{{ asset('css/app.css') }}" rel="stylesheet">
	
	<link rel="stylesheet" type="text/css" href="https://unpkg.com/wangeditor@3.1.1/release/wangEditor.min.css">
	<script src="https://cdn.bootcss.com/jquery/3.2.0/jquery.min.js"></script>
</head>
<body>
	<div id="app" style="height: 100%;">
	  <router-view></router-view>
	</div>
	
	<script src="https://cdn.bootcss.com/vue/2.5.7/vue.min.js"></script>
	<script src="https://unpkg.com/element-ui@2.4.6/lib/index.js"></script>
	<script src="https://cdn.bootcss.com/vue-router/3.0.1/vue-router.js"></script>
	<script src="https://cdn.bootcss.com/axios/0.18.0/axios.min.js"></script>
	<script type="text/javascript" src="https://unpkg.com/wangeditor@3.1.1/release/wangEditor.min.js"></script>
	<script src="{{ asset('js/app.js') }}"></script>
	<!-- <link rel="stylesheet" href="https://unpkg.com/element-ui@2.4.6/lib/theme-chalk/index.css"> -->
</body>
</html>