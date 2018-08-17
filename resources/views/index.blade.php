<!DOCTYPE html>
<html>
<head>
	<title>Blog</title>
	<meta name="csrf-token" content="{{ csrf_token() }}">
	<link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
	<div id="app">
	  <router-view></router-view>
	</div>
	<script src="{{ asset('js/app.js') }}"></script>
</body>
</html>