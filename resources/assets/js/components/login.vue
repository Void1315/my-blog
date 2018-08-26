<template>
	<div class="login-from-box">
		<el-form :model="formInline" class="demo-form-inline" label-width="80px">
		  <el-form-item label="邮箱" prop="email"
			:rules="[
			      { required: true, message: '请输入邮箱地址', trigger: 'blur' },
			      { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
			    ]"
		  >
		    <el-input v-model="formInline.email" placeholder="邮箱"></el-input>
		  </el-form-item>
		  <el-form-item label="密码"
		  	prop="pass"
		  	:rules="[
			      { required: true, message: '请输入密码', trigger: 'blur' }
			    ]"
		  >
		    <el-input type="password" auto-complete="off" v-model="formInline.password" placeholder="密码" @keyup.enter.native="onSubmit"></el-input>
		  </el-form-item>
		  <el-form-item>
		    <el-button type="primary" @click="onSubmit" >登陆</el-button>
		  </el-form-item>
		</el-form>
	</div>
</template>
<script>
	module.exports={
		data:function(){
			return{
				formInline: {
		          email: '',
		          password: ''
		        }
			}
		},
		methods:{
			onSubmit(){
				var self = this;
				this.$ajax.post("/login",{
					email:this.formInline.email,
					password:this.formInline.password,
					_token:document.getElementsByTagName('meta')['csrf-token'].getAttribute('content')
				}).then(function(res){
					if(res.data=="200"){
						self.$message.success("3秒后跳转后台！");
						setTimeout(function(){
							self.$router.push('/admin')
						},3000)
					}
					else
						self.$message.warning("请输入正确的邮箱与密码!")
				}).catch(function(res){
					self.$message.error("出现了一些错误，请您稍后再试！");
				})
			},
		}
	}
</script>
<style lang="scss" scoped="true" type="text/css">
@import "../../sass/app.scss";
.demo-form-inline{
	
}
.login-from-box{
	display: flex;
    justify-content: center;
    margin-top: 70px;
}
</style>