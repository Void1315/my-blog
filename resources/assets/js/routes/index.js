import IndexContent from "../components/IndexContent.vue"
import VueRouter from 'vue-router';
import { Loading } from 'element-ui';
const routes = [{
        path: '/',
        component: resolve => require(["../components/index.vue"], resolve),

        children: [{
                path: '',
                component: IndexContent,
            },
            {
                path: "article/:id",
                component: resolve => require(["../components/Article.vue"], resolve),
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