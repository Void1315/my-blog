let mix = require('laravel-mix');
const {
    CleanWebpackPlugin
} = require("clean-webpack-plugin");
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
    devServer: {
        proxy: {
            '*': 'http://localhost:8000'
        }
    },
    output: {
        publicPath: "/",
        chunkFilename: 'js/lazy/[name].[chunkhash].js'
    },

    plugins: [
        new CleanWebpackPlugin({
            verbose: true,
            cleanOnceBeforeBuildPatterns: ['js/lazy/*','!js/lazy/.gitignore']
        })
    ],
    externals: {
        'vue': 'Vue',
        'vue-router': 'VueRouter',
        'element-ui': 'ELEMENT',
        "axios": "axios",
        "vue-lazyload": "VueLazyload",
        "jquery": 'jQuery',
    }
});