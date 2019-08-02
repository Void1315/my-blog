<template>
  <div>
    <div id="editor-box">
      <mavon-editor
        ref="md"
        id="editor"
        v-model="form.text"
        @imgAdd="imgAdd"
      />
    </div>
    <div class="form-article">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="文章标题" prop="title">
          <el-input v-model="form.title" size="medium" placeholder="文章标题"></el-input>
        </el-form-item>
        <el-form-item prop="tages">
          <el-tag :key="tag" closable v-for="tag in form.tages" @close="handleClose(tag)">{{tag}}</el-tag>
          <el-autocomplete
            class="input-new-tag"
            v-if="inputVisible"
            v-model="inputValue"
            ref="saveTagInput"
            size="small"
            :fetch-suggestions="querySearch"
            @select="handleSelect"
            @keyup.enter.native="handleInputConfirm"
          ></el-autocomplete>
          <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
        </el-form-item>
        <el-form-item prop="fileList">
          <el-upload
            action="/create/image"
            :on-remove="imgRemove"
            :file-list="form.fileList"
            :multiple="false"
            :on-exceed="tipLimit"
            :on-success="imgUpload"
            :limit="1"
            name="img"
            :data="img_data"
            list-type="picture"
          >
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传一张封面文件，且不超过2M</div>
          </el-upload>
        </el-form-item>
        <el-form-item>
          <el-button v-if="!this.$route.params.id" type="primary" @click="submitForm()">提交</el-button>
          <el-button v-else @click="editForm('form')">修改</el-button>
          <el-button type="danger" @click="resetForm()">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import {mavonEditor} from "mavon-editor";
import "mavon-editor/dist/css/index.css";
import {tagList,getArticle,uploadImage,createArticle} from '../../api/api.js'
module.exports = {
  components:{
    mavonEditor
  },
  data: function() {
    return {
      form: {
        title: "",
        text: "",
        tages: [],
        img_id: this.img_id,
        fileList: []
      },
      img_data: {
        _token: document
          .getElementsByTagName("meta")
          ["csrf-token"].getAttribute("content"),
        show: 0
      },
      inputVisible: false,
      inputValue: "",
      img_id: ""
    };
  },
  mounted: function() {
    var self = this;
    this.loadAll();
    this.$nextTick(function() {
      self._token = document
        .getElementsByTagName("meta")
        ["csrf-token"].getAttribute("content");
      this.$nextTick(function() {
        if (self.$route.params.id) {
          //修改文章的预加载
          this.initArticleEditor();
        }
      });
    });
  },
  methods: {
    imgAdd(pos, $file) {
      // 第一步.将图片上传到服务器.
      var data = new FormData();
      data.append("image", $file);
      data.append('show',0)
      uploadImage(data).then(res=>{
        console.log(res.data.data[0])
        this.$refs.md.$img2Url(pos, res.data.data[0]);
      })
    },
    handleClose(tag) {
      this.form.tages.splice(this.form.tages.indexOf(tag), 1);
    },
    showInput() {
      this.inputVisible = true;
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },
    //初始化文章修改
    initArticleEditor() {
      getArticle(this.$route.params.id).then(res=>{
        for (var i = 0; i < res.data.tages.length; i++) {
          this.form.tages.push(res.data.tages[i].name);
        }
        this.form = { ...res.data };
        this.form.text = res.data.text;
        this.form.fileList.push({ name: "封面", url: res.data.img_url });
      })
    },
    querySearch(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return restaurant => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        );
      };
    },
    loadAll() {
      var arr = [];
      tagList().then(res=>{
        for (var i = 0; i < res.data.length; i++) {
          var item = { value: res.data[i].name };
          arr.push(item); //属性
        }
        this.restaurants = arr;
      })
    },
    handleSelect(item) {
      this.handleInputConfirm();
    },
    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        if (this.form.tages.indexOf(inputValue) == -1)
          this.form.tages.push(inputValue);
        else {
          this.$message("已经添加过此标签！");
        }
      }
      this.inputVisible = false;
      this.inputValue = "";
    },
    imgRemove(file) {
      console.log(file);
    },
    tipLimit() {
      this.$message("只能上传一张封面文件!");
    },
    resetForm() {
      this.$refs["form"].resetFields();
    },
    submitForm() {
      createArticle(this.form).then(res=>{
        this.$message({
          message: "文章上传成功！",
          type: "success"
        });
        this.resetForm();//清除
      })
    },
    editForm() {
      var self = this;
      this.$ajax({
        method: "post",
        url: "/edit/article/" + this.$route.params.id,
        data: this.form
      }).then(function(res) {
        self.$message({
          message: "文章修改成功！",
          type: "success"
        });
      });
    },
    imgUpload(response) {
      this.img_id = response;
      this.form.img_id = this.img_id;
    }
  }
};
</script>
<style lang="scss" scoped="" type="text/css">
@import "../../../sass/app.scss";
#editor {
  height: 580px;
}
.editor-tool {
  flex-wrap: wrap !important;
}
.editor-text {
  border: 1px solid #bdbdbd77;
  height: 300px;
}
.form-article {
  margin-top: 20px;
}
@media #{$medie-type} and (max-width: $phone-size) {
  .editor-text {
    height: 250px;
  }
}
@media #{$medie-type} and (min-width: $phone-size) {
  .form-article {
    width: 435px;
  }
}
</style>