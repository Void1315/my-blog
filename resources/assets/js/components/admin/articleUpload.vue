<template>
  <div>
    <div id="editor-box">
      <mavon-editor
        ref="md"
        id="editor"
        v-model="editorContent"
        @change="onChange"
        @htmlCode="htmlCode"
        @imgAdd="imgAdd"
        @imgDel="$imgDel"
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
module.exports = {
  data: function() {
    return {
      editorContent: "",
      form: {
        title: "",
        text: this.editorContent,
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
      var formdata = new FormData();
      formdata.append("image", $file);
      this.$ajax({
		
        url: "/create/image",
        method: "post",
        data: {formdata,_token:this.img_data._token,},
        headers: { "Content-Type": "multipart/form-data" }
      }).then(url => {
        // 第二步.将返回的url替换到文本原位置![...](0) -> ![...](url)
        // $vm.$img2Url 详情见本页末尾
        $vm.$img2Url(pos, url);
      });
    },
    onChange(val) {},
    htmlCode(val) {
      console.log(val);
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
      let id = this.$route.params.id;
      this.$ajax.get("/admin/article/get/" + id).then(res => {
        for (var i = 0; i < res.data.tages.length; i++) {
          this.form.tages.push(res.data.tages[i].name);
        }
        this.form = { ...res.data };
        this.editorContent = res.data.text;
        this.form.fileList.push({ name: "封面", url: res.data.img_url });
      });
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
      var data;
      var arr = [];
      var self = this;
      this.$ajax.get("/admin/type/list").then(function(res) {
        data = res.data;
        for (var i = 0; i < res.data.length; i++) {
          var item = { value: res.data[i].name };
          arr.push(item); //属性
        }
        self.restaurants = arr;
      });
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
      this.editorContent = "";
      this.editor.txt.html("");
    },
    submitForm() {
      var self = this;
      this.$ajax({
        method: "post",
        url: "/create/article",
        data: this.form
      }).then(function(response) {
        self.$message({
          message: "文章上传成功！",
          type: "success"
        });
        self.resetForm();
      });
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