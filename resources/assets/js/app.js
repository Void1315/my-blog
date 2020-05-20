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
import './functions'

import router from './routes'
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css';
import 'element-ui/lib/theme-chalk/base.css';
import axios from 'axios';
import Live2d from './functions/live2d'
// import marked from "marked";
//图片懒加载
import VueLazyLoad from 'vue-lazyload';
Vue.use(VueLazyLoad, {
  error: 'img/error.jpeg',
  loading: 'img/loading.gif',
  attempt: 3
});
import 'viewerjs/dist/viewer.css';
import Viewer from 'v-viewer';
Vue.use(Viewer);

Vue.prototype.$ajax = axios;

const app = new Vue({
  el: '#app',
  router,
}).$mount('#app');
const live2d = new Live2d();
console.log(live2d.autoload)
live2d.autoload();