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

Vue.component('article-over', require('./components/ArticleOverview.vue'));
Vue.component('to-top', require("./components/ToTop.vue"));


import ElementUI from 'element-ui';
import VueRouter from 'vue-router';
import axios from 'axios';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
//图片懒加载
import VueLazyLoad from 'vue-lazyload';
Vue.use(VueLazyLoad, {
  error: 'img/error.jpeg',
  loading: 'img/loading.gif',
  attempt: 3
});
import 'element-ui/lib/theme-chalk/base.css';
// collapse 展开折叠
// import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';
// Vue.component(CollapseTransition.fade, CollapseTransition)
import IndexContent from "./components/IndexContent.vue"
// import preview from 'vue-photo-preview'
// import 'vue-photo-preview/dist/skin.css'
// Vue.use(preview);


import 'viewerjs/dist/viewer.css';
import Viewer from 'v-viewer';
Vue.use(Viewer);

import wangEditor from 'wangeditor';


Vue.prototype.$ajax = axios;
Vue.use(VueRouter);
Array.prototype.indexOf = function (val) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] == val) return i;
  }
  return -1;
};
Array.prototype.remove = function (val) {
  var index = this.indexOf(val);
  if (index > -1) {
    this.splice(index, 1);
  }
};

// Vue.use(Row);
// Vue.use(Col);
// Vue.use(Input);;终于能ＴＭ写中文了
// Vue.use(Form);
// Vue.use(FormItem);

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。asdasd
// 我们晚点再讨论嵌套路由。

// const  IndexContent = () => import('./components/IndexContent.vue');
// const Foo = () => import('./components/IndexContent.vue');
const routes = [{
    path: '/',
    component: resolve => require(["./components/index.vue"], resolve),
    children: [{
        path: '',
        component: IndexContent,
      },
      {
        path: "article/:id",
        component: resolve => require(["./components/Article.vue"], resolve),
      },
      {
        path: "image",
        component: resolve => require(["./components/ImageTime.vue"], resolve),
      }
    ],
  },

  {
    path: '/login',
    component: resolve => require(["./components/login.vue"], resolve),
  },
  {
    path: "/admin",
    component: resolve => require(["./components/admin/AdminIndex.vue"], resolve),
    children: [
      {
        path: '/',
        component: resolve => require(["./components/admin/articleUpload.vue"], resolve),
      },
      {
        path: 'article',
        component: resolve => require(["./components/admin/articleUpload.vue"], resolve),
      },
      {
        path: "article/edit/:id",
        component: resolve => require(["./components/admin/articleUpload.vue"], resolve),
      },
      {
        path: 'article/manage',
        component: resolve => require(["./components/admin/articleManage.vue"], resolve),
      },
      {
        path: 'article/recycle',
        component: resolve => require(["./components/admin/articleRecycle.vue"], resolve),
      },
      {
        path: 'image/upload',
        component: resolve => require(["./components/admin/imageUpload.vue"], resolve),
      },
      {
        path: 'image/manage',
        component: resolve => require(["./components/admin/imageManage.vue"], resolve),
      },
      {
        path: 'image/recycle',
        component: resolve => require(["./components/admin/imageRecycle.vue"], resolve),
      }
    ]
  },
  {
    path: "*",
    redirect: "/"
  },
];
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})
router.beforeEach((to, from, next) => {
  if (to.path == "/admin" || (to.matched.lenght != undefined && to.matched[0].path == "/admin")) {
    if (sessionStorage.getItem("check"))
      next()
    axios.get("/check").then(function (res) {
      if (res.data == "200") {
        sessionStorage.setItem("check", true);
        next()
      } else
        next({
          path: '/login'
        })
    })
  } else
    next()
})
const app = new Vue({
  el: '#app',
  router,
}).$mount('#app');