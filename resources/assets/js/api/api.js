import fetch from '../config/fetch.js'
export const uploadImage = (data)=>fetch('/upload/image',data,'post');  //上传图片
export const tagList = ()=>fetch('/admin/type/list',{},'get');   //获取标签
export const getArticle = id=>fetch(`/admin/article/get/${id}`,'get');   //通过id 获取文章
export const createImage = (data)=>fetch('/create/image',data,'post')//创建图片
export const createArticle = (data)=>fetch('/create/article',data,'post'); //上传文章