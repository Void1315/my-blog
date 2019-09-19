<!DOCTYPE html>
<html>
<head>
	<title>Asahi的Blog</title>
	<meta name="csrf-token" content="{{ csrf_token() }}">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
	<link rel="icon" href="{{ asset('img/icon.ico')}} " type="image/x-icon"/>
	<link href="{{ mix('css/app.css') }}" rel="stylesheet">
	
	<link rel="preconnect" href="https://cdn.bootcss.com">
	<link href="https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
	<link href="https://cdn.bootcss.com/element-ui/2.10.1/theme-chalk/index.css" rel="stylesheet">
</head>
<body>
	<div id="app" style="height: 100%;">
	  <router-view></router-view>
	</div>
	<!-- <script src="https://cdn.bootcss.com/vue/2.6.10/vue.min.js"></script> -->
	<script src="https://cdn.bootcss.com/vue/2.6.10/vue.js"></script>
	<script src="https://cdn.bootcss.com/element-ui/2.10.1/index.js"></script>
	<script src="https://cdn.bootcss.com/vue-router/3.0.7/vue-router.js"></script>
	<script src="https://cdn.bootcss.com/axios/0.19.0/axios.min.js"></script>
	<script src="https://cdn.bootcss.com/vue-lazyload/1.2.6/vue-lazyload.js"></script>
	<script src="{{ mix('js/app.js') }}"></script>
</body>
</html>