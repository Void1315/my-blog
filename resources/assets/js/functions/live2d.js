class Live2D {
    constructor(){
        this.live2d_path = "https://www.yuhaoyan.cn/js/live2d/";
        this.api_path = "https://live2d-api.yuhaoyan.cn/"
    }
    autoload () {
        if (screen.width >= 768) {
            Promise.all([
                this.loadExternalResource(this.live2d_path + "waifu.css", "css"),
                this.loadExternalResource(this.live2d_path + "live2d.min.js", "js"),
                this.loadExternalResource(this.live2d_path + "waifu-tips.js", "js")
            ]).then(() => {
                initWidget({
                    waifuPath: this.live2d_path + "waifu-tips.json",
                    apiPath: "https://live2d-api.yuhaoyan.cn/",
                });
            });
        }
    }
    loadExternalResource(url, type){
        return new Promise((resolve, reject) => {
            let tag;
    
            if (type === "css") {
                tag = document.createElement("link");
                tag.rel = "stylesheet";
                tag.href = url;
            }
            else if (type === "js") {
                tag = document.createElement("script");
                tag.src = url;
            }
            if (tag) {
                tag.onload = () => resolve(url);
                tag.onerror = () => reject(url);
                document.head.appendChild(tag);
            }
        });
    }
}
export default Live2D;