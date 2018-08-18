
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// Vue.component('example-component', require('./components/ExampleComponent.vue'));
// import LeftWin from "./components/LeftWindows.vue"
Vue.component('left-windows', require('./components/LeftWindows.vue'));
Vue.component('my-header', require('./components/Header.vue'));
// Vue.component('index-content', require('./components/IndexContent.vue'));
Vue.component('article-over', require('./components/ArticleOverview.vue'));
// import Index from "./components/index.vue";
// import IndexContent from "./components/IndexContent.vue";
// import Article from "./components/Article.vue";

import ElementUI from 'element-ui';
import VueRouter from 'vue-router';

import 'element-ui/lib/theme-chalk/index.css';
import '../font-awesome/css/font-awesome.min.css';


Vue.use(VueRouter);
// Vue.use(ElementUI);
import { Row, Col } from 'element-ui'

Vue.use(Row)
Vue.use(Col)

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。asdasd
// 我们晚点再讨论嵌套路由。

const  IndexContent = () => import('./components/IndexContent.vue');
// const Foo = () => import('./components/IndexContent.vue');
const routes = [
  	{ 	path: '/',
  		component: resolve=>require(["./components/index.vue"], resolve),
  		children:[
  		{
  			path:"article",
  			component: resolve=>require(["./components/Article.vue"], resolve),
  		}
  		],
	},
];
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})
const app = new Vue({
    el: '#app',
    router,
}).$mount('#app');
