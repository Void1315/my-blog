<template>
	<div>
		<div class="view">
			
	        <p><b>以下是编辑器的内容：</b></p>
	        <div v-html="editorContent">
	        	
	        </div>
	        <hr>
		</div>
		<div id="editor-tool" class="editor-tool">
			
		</div>
		<div id="editor-container">
	        <div id="editor-trigger" class="editor-text">
	        </div>
		</div>
		<div class="form-article">
			<el-form ref="form" :model="form" label-width="80px">
				  <el-form-item label="文章标题" prop="title">
				    <el-input v-model="form.title" size="medium" placeholder="文章标题"></el-input>
				  </el-form-item>
				  <el-form-item prop="tages">
				  	<el-tag
					  :key="tag"
					  closable
					  v-for="tag in form.tages"
					  @close="handleClose(tag)">
					  {{tag}}
					</el-tag>
					<el-input
					  class="input-new-tag"
					  v-if="inputVisible"
					  v-model="inputValue"
					  ref="saveTagInput"
					  size="small"
					  @keyup.enter.native="handleInputConfirm"
					  @blur="handleInputConfirm"
					>
					</el-input>
					<el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
				  </el-form-item>
				  <el-form-item prop="fileList">
				  	<el-upload
					  action="/create/image"
					  :on-remove="imgRemove"
					  :file-list="form.fileList"
					  multiple="false"
					  :on-exceed="tipLimit"
					  :on-success="imgUpload"
					  limit="1"
					  name="img"
					  :data="img_data"
					  list-type="picture">
					  <el-button size="small" type="primary">点击上传</el-button>
					  <div slot="tip" class="el-upload__tip">只能上传一张封面文件，且不超过2M</div>
					</el-upload>
				  </el-form-item>
				    <el-form-item>
					    <el-button type="primary" @click="submitForm('form')">提交</el-button>
					    <el-button @click="resetForm('form')">重置</el-button>
					</el-form-item>
			</el-form>
		</div>
	</div>
</template>
<script>
	module.exports={
		data:function(){
			return{
				editorContent: '',
				editor:"",
				form:{
					title:'',
					text:this.editorContent,
					tages:[],
					img_id:this.img_id
				},
				img_data:{
					"_token":document.getElementsByTagName('meta')['csrf-token'].getAttribute('content'),
				},
				inputVisible: false,
        		inputValue: '',
        		img_id:''
			}
		},
		mounted:function () {
			var self = this;
			this.$nextTick(function () {
				self._token = document.getElementsByTagName('meta')['csrf-token'].getAttribute('content')
		        this.$nextTick(function () {
				    self.editor = new wangEditor('#editor-tool','#editor-trigger');
		            self.editor.customConfig.onchange = function(){
						self.editorContent = self.editor.txt.html();
						self.form.text = self.editorContent;
					}
		            self.editor.create();
				})
		    })
    	},
    	methods:{
    		handleClose(tag) {
		        this.form.tages.splice(this.form.tages.indexOf(tag), 1);
		    },

		    showInput() {
		        this.inputVisible = true;
		        this.$nextTick(_ => {
		          this.$refs.saveTagInput.$refs.input.focus();
		        });
			},

		    handleInputConfirm() {
		        let inputValue = this.inputValue;
		        if (inputValue) {
		          this.form.tages.push(inputValue);
		        }
		        this.inputVisible = false;
		        this.inputValue = '';
		    },
		    imgRemove(file){
		    	console.log(file)
		    },
		    tipLimit(){
		    	this.$message('只能上传一张封面文件!');
		    },
		    resetForm(formName){
		    	this.$refs['form'].resetFields();
		    },
		    submitForm(formName){
		    	var self = this;
		    	this.$ajax({
		    		method:'post',
		    		url:'/create/article',
		    		data:this.form
		    	}).then(function (response){
				    self.$message({
			          message: '文章上传成功！',
			          type: 'success'
			        });
				    this.$refs['form'].resetFields();
				  	})
		    },
		    imgUpload(response){
		    	this.img_id = response;
		    	this.form.img_id = this.img_id;
		    }


    	}
	}
</script>
<style lang="scss" scoped="" type="text/css">
@import "../../../sass/app.scss";
.editor-tool{
	flex-wrap: wrap !important; 
}
.editor-text{
    border: 1px solid #bdbdbd77;
    height: 300px;
}
.form-article{
	margin-top: 20px;
}
@media #{$medie-type} and (max-width: $phone-size){
	.editor-text{
		height: 250px;
	}
}
@media #{$medie-type} and (min-width: $phone-size){
	.form-article{
		width: 435px;
	}
}
</style>