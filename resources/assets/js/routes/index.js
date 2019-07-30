import IndexContent from "../components/IndexContent.vue"
import VueRouter from 'vue-router';
import { Loading } from 'element-ui';
let MyLoadind = {
    loadingInstance:null,
    options:{
        // target:"#yhy",
    },
    show:function(){
        console.log("开始加载")
        this.loadingInstance = Loading.service(this.options);
    },
    resolve(resolve) {//加载完成隐藏loading组件
        return component=>{
            setTimeout(()=>{
                this.loadingInstance.close()//关闭loading组件
                console.log("加载完成")
                resolve(component);
            }, 10)
        }
    }
}
const routes = [{
        path: '/',
        component: resolve => {
            MyLoadind.show()
            require(["../components/index.vue"], MyLoadind.resolve(resolve))
        },
        children: [{
                path: '',
                component: resolve => {
                    MyLoadind.show()
                    require(["../components/IndexContent.vue"], MyLoadind.resolve(resolve))},
            },
            {
                path: "article/:id",
                component: resolve => {MyLoadind.show();require(["../components/Article.vue"], MyLoadind.resolve(resolve))},
            },
            {
                path: "image",
                component: resolve => require(["../components/ImageTime.vue"], resolve),
            }
        ],
    },
    {
        path: '/login',
        component: resolve => require(["../components/login.vue"], resolve),
    },
    {
        path: "/admin",
        component: resolve => require(["../components/admin/AdminIndex.vue"], resolve),
        redirect: '/admin/article',
        children: [{
                path: 'article',
                component: resolve => require(["../components/admin/articleUpload.vue"], resolve),
            },
            {
                path: "article/edit/:id",
                component: resolve => require(["../components/admin/articleUpload.vue"], resolve),
            },
            {
                path: 'article/manage',
                component: resolve => require(["../components/admin/articleManage.vue"], resolve),
            },
            {
                path: 'article/recycle',
                component: resolve => require(["../components/admin/articleRecycle.vue"], resolve),
            },
            {
                path: 'image/upload',
                component: resolve => require(["../components/admin/imageUpload.vue"], resolve),
            },
            {
                path: 'image/manage',
                component: resolve => require(["../components/admin/imageManage.vue"], resolve),
            },
            {
                path: 'image/recycle',
                component: resolve => require(["../components/admin/imageRecycle.vue"], resolve),
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
    var pattern = /^\/admin/g;
    if (pattern.test(to.path) || to.path == "/admin" || (to.matched.lenght != undefined && to.matched[0].path == "/admin")) {
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
export default router;