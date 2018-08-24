let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/app.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css');
mix.webpackConfig({
    output: {
        publicPath: "/",
        chunkFilename: 'js/lazy/[name].[chunkhash].js'
    },
    externals: {
    	'vue': 'Vue',
    	'vue-router': 'VueRouter',
    	'element-ui': 'ELEMENT',
    	"axios":"axios",
        "jquery": 'jQuery',
        "wangEditor": "wangEditor"
 	}
});