<template>
  <div class="content">
    <div class="article-box">
      <div v-viewer="{title:false,movable:false,url:getUrl}" v-loading="loading">
        <el-row>
          <el-col :span="4" :lg="{span:2}">
            <div class="side-triangle article-triangle"></div>
          </el-col>
          <div class="head-box">
            <p class="title">{{data.title}}</p>
          </div>
          <div class="data-box">
            <i class="fa fa-calendar-plus-o"></i>
            <span>{{data.created_at}}</span>
          </div>
        </el-row>
        <el-row>
          <el-col :md="{span:18,offset:3}">
            <img :src="data.img_url" class="article-img-box" />
          </el-col>
        </el-row>
        <el-row>
          <el-col :md="{span:18,offset:3}" :xs="{span:24,offset:0}" class="text-box">
            <!-- <mavon-editor
              ref="md"
              id="editor"
              v-model="data.text"
              :subfield="prop.subfield"
              :defaultOpen="prop.defaultOpen"
              :boxShadow="prop.boxShadow"
              :toolbarsFlag="prop.toolbarsFlag"
              :editable="prop.editable"
              :scrollStyle="prop.scrollStyle"
            />-->
            <div v-html="compiledMarkdown"></div>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <hr class="side-hr" />
          </el-col>
        </el-row>
        <el-row type="flex" class="bottom-icon-box" justify="space-between">
          <div class="lable-box">
            <div class="tag-item on-cursor" v-for="tag in data.tages">
              <i class="fa fa-tag"></i>
              <span>{{ tag.name }}</span>
            </div>
          </div>
          <div class="like-box">
            <div class="lable-item on-cursor" @click="toAssent">
              <i class="fa fa-thumbs-o-up"></i>
              <span>{{ data.assent }}</span>
            </div>
            <div class="lable-item">
              <i class="fa fa-share-alt"></i>
            </div>
          </div>
        </el-row>
      </div>

      <div class="comment-box">
        <div id="SOHUCS" v-bind:sid="$route.params.id"></div>
      </div>
    </div>
  </div>
</template>
<script>
import marked from 'marked'
import hljs from "highlight.js";
import "highlight.js/styles/github.css";
module.exports = {
  computed: {
    compiledMarkdown: function() {
      return marked(this.data.text, {
        highlight: function(code) {
          return hljs.highlightAuto(code).value;
        }
      });
    },
    prop() {
      let data = {
        subfield: false, // 单双栏模式
        defaultOpen: "preview", //edit： 默认展示编辑区域 ， preview： 默认展示预览区域
        editable: false,
        toolbarsFlag: false,
        scrollStyle: true,
        boxShadow: truem
      };
      return data;
    }
  },
  data: function() {
    return {
      data: {
        text: ""
      },
      getUrl: "",
      loading: true
    };
  },
  methods: {
    getData() {
      var self = this;
      this.$ajax
        .get("/article/get/" + this.$route.params.id)
        .then(function(response) {
          self.data = response.data;
          self.loading = false;
          self.getUrl = response.data.img_url;
        })
        .catch(function(error) {
          if (error.response) {
            if (error.response.status == 404) {
              self.$router.replace("/");
              self.$message.error("小老弟，文章不存在");
            } else self.$message.error("出现了一些错误请稍后再试！");
          }
        });
    },
    toAssent() {
      let isAssent = "isAssent_" + this.$route.params.id;
      var self = this;
      if (document.cookie.indexOf(isAssent + "=") == -1) {
        document.cookie = isAssent + "=true";
        this.$ajax
          .post("/article/assent", {
            id: this.$route.params.id,
            _token: document
              .getElementsByTagName("meta")
              ["csrf-token"].getAttribute("content")
          })
          .then(function(res) {
            self.$message.success("谢谢你喜欢这篇文章!");
            self.data.assent += 1;
          })
          .catch(function(error) {
            console.log(error.res);
            self.$message("出现了一些错误请稍后再试!");
          });
      } else {
        this.$message.warning(" 你已经点过赞了!");
      }
    }
  },
  mounted: function() {
    var self = this;
    this.$nextTick(function() {
      self.getData();
    });
  },
  beforeMount: function() {
    (function() {
      var appid = "cytMq1XyR";
      var conf = "prod_8abf39185ea6bc48f81b87e55d3de736";
      var width = window.innerWidth || document.documentElement.clientWidth;
      if (width < 960) {
        var script = document.createElement("script");
        script.src =
          "https://changyan.sohu.com/upload/mobile/wap-js/changyan_mobile.js?client_id=" +
          appid +
          "&conf=" +
          conf +
          "";
        script.id = "changyan_mobile_js";
        script.charset = "utf";
        document.head.appendChild(script);
      } else {
        var loadJs = function(d, a) {
          var c =
            document.getElementsByTagName("head")[0] ||
            document.head ||
            document.documentElement;
          var b = document.createElement("script");
          b.setAttribute("type", "text/javascript");
          b.setAttribute("charset", "UTF-8");
          b.setAttribute("src", d);
          if (typeof a === "function") {
            if (window.attachEvent) {
              b.onreadystatechange = function() {
                var e = b.readyState;
                if (e === "loaded" || e === "complete") {
                  b.onreadystatechange = null;
                  a();
                }
              };
            } else {
              b.onload = a;
            }
          }
          c.appendChild(b);
        };
        loadJs("https://changyan.sohu.com/upload/changyan.js", function() {
          window.changyan.api.config({ appid: appid, conf: conf });
        });
      }
    })();
  }
};
</script>


<style lang="scss" scoped>
@import "../../sass/app.scss";
.article-img-box {
  height: auto;
  width: 100%;
  display: block;
}
.article-box {
  width: 90%;
  border-radius: 3px;
  border: $border-style;
  margin: 20px auto;
  padding-bottom: 20px;
}

.text-box {
  img {
    max-width: 800px;
    max-height: 800px;
  }
  p {
    word-break: break-word;
  }
}
.article-triangle {
  border-width: 45px;
  $triangle-color: black;
  border-color: $triangle-color transparent transparent $triangle-color;
}
.title {
  margin-top: 20px;
  font {
    font-size: 35px;
  }
}
.lable-item {
  display: inline-flex;
  margin-right: 10px;
  align-items: center;
  span {
    margin-left: 5px;
  }
  i {
    font-size: 20px;
  }
}
.comment-box {
  margin: 0 55px;
  margin-top: 20px;
}
.comment-text {
  box-shadow: $clear-love-shadow;
}
.lable-box {
  display: inline-flex;
  .tag-item {
    margin-right: 10px;
  }
}
.like-box {
  display: inline-block;
}
.bottom-icon-box {
  padding: 0px 100px;
}
@media #{$medie-type} and (max-width: $phone-size) {
  .article-box {
    height: auto;
    border: none;
    box-shadow: none;
    margin: auto;
    width: 90%;
  }
  .comment-box {
    margin: 0px;
    margin-top: 20px;
  }
  .side-triangle {
    display: none;
  }
  .bottom-icon-box {
    padding: 0;
  }
}
@media #{$medie-type} and (min-width: $phone-size) {
  .article-img-box {
    margin: auto;
    max-height: 400px;
    width: auto;
  }
}
</style>
<style lang="scss">
.text-box {
  a {
    color: #0066d1 !important;
  }
}
.text-box {
  pre {
    background-color: #f8f8f8 !important;
    padding: 5px 15px;
  }
}
</style>