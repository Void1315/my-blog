<template>
	<div>
		<el-form ref="form" :model="form" label-width="80px">
			<el-form-item label="上传日期" prop="date">
				<el-date-picker
			      v-model="form.date"
			      type="date"
			      placeholder="选择日期"
			      >
			    </el-date-picker>
			</el-form-item>
			<el-form-item label="上传" prop="imageList">
				<el-upload
				  action="/create/image"
				  :on-preview="handlePreview"
				  :on-remove="handleRemove"
				  :on-success="handSuccess"
				  :file-list="form.imageList"
				  :data="img_data"
				  name="img"
				  list-type="picture">
				  <el-button size="small" type="primary">点击上传</el-button>
				</el-upload>
			</el-form-item>
			<el-form-item label="图片描述" prop="info">
			    <el-input type="textarea" v-model="form.info" class="info" maxlength="140"></el-input>
			</el-form-item>
			<el-form-item>
			    <el-button type="primary" @click="submitForm">立即创建</el-button>
			    <el-button @click="resetForm">重置</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>
<script>
module.exports={
	data:function(){
		return{
			form:{
				date:new Date(),
				imageList:[],
				idList:[],
				info:''
			},
			img_data:{
				"_token":document.getElementsByTagName('meta')['csrf-token'].getAttribute('content'),
				"show":1
			},
		}
	},
	methods:{
		changeData:function(){
			console.log(this.form.date)
		},
		handleRemove(file, fileList) {
        	this.form.idList.remove(file.response)
      	},
      	handlePreview(file) {
       		console.log(file);
      	},
      	handSuccess(response){
			this.form.idList.push(response);
      	},
      	resetForm(){
      		this.$refs['form'].resetFields();
      		this.form.idList = []
      	},
      	submitForm(){
      		this.$ajax.post("/create/imgitem",this.form)
      	}
	},
	mounted:function(){
	},
}
</script>
<style lang="scss" scoped="" type="text/css">
@import "../../../sass/app.scss";
.info{
	max-width: 600px;
}
</style>