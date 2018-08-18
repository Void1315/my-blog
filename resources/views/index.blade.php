<!DOCTYPE html>
<html>
<head>
	<title>Blog</title>
	<meta name="csrf-token" content="{{ csrf_token() }}">
	<link href="{{ asset('css/app.css') }}" rel="stylesheet">
	<!-- <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css"> -->
	<!-- <link href="https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"> -->

</head>
<body>
	<div id="app">
	  <router-view></router-view>
	</div>
	
	<!-- <script src="https://cdn.bootcss.com/vue/2.5.7/vue.min.js"></script> -->
	<!-- <script src="https://unpkg.com/element-ui/lib/index.js"></script> -->
	<!-- <script src="https://cdn.bootcss.com/vue-router/3.0.1/vue-router.js"></script> -->
	<script src="{{ asset('js/app.js') }}"></script>
</body>
</html>