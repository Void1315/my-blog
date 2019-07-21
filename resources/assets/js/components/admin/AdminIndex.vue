<template>
	<el-container style="display: flex;height: 100%;background-color: white;">
		<el-aside class="admin-side-box hidden-phone">
			<div class="show-side">
				<div>
					<i class="fa fa-bookmark"></i>
					<span>后台</span>
				</div>
			</div>
	 		<div class="admin-side">
	 			<el-row>
 				  <el-col>
				    <el-menu
				      class="el-menu-vertical-demo"
				      :default-active="active_index"
					  @select="selectMenu"
				      background-color="#545c64"
				      text-color="#fff"
				      active-text-color="#ffd04b" style="border: none;">
				      <el-submenu index="1">
				        <template slot="title">
				          <i class="el-icon-document"></i>
				          <span>文章</span>
				        </template>
				        <el-menu-item-group>
				          <el-menu-item index="/admin/article">上传文章</el-menu-item>
				          <el-menu-item index="/admin/article/manage">文章管理</el-menu-item>
				          <el-menu-item index="/admin/article/recycle">回收站</el-menu-item>
				        </el-menu-item-group>
				      </el-submenu>
				      <el-submenu index="2">
				      	<template slot="title">
					        <i class="el-icon-picture"></i>
					        <span slot="title">图片</span>
				        </template>
				        <el-menu-item-group>
				          <el-menu-item index="/admin/image/upload">上传图片</el-menu-item>
				          <el-menu-item index="/admin/image/manage">管理图片</el-menu-item>
				          <el-menu-item index="/admin/image/recycle">回收站</el-menu-item>
				        </el-menu-item-group>
				      </el-submenu>
				      <el-menu-item index="3">
				        <i class="el-icon-view"></i>
				        <span slot="title">评论</span>
				      </el-menu-item>
				    </el-menu>
				  </el-col>
	 			</el-row>
	 		</div>
		</el-aside>
		<el-container>
			<el-header class="show-phone admin-header">
				<el-menu  :default-active="$route.path" router="true" class="el-menu-demo hander-menu" mode="horizontal">
				  <el-submenu index="1">
				        <template slot="title">
				          <i class="el-icon-document"></i>
				          <span>文章</span>
				        </template>
				        <el-menu-item-group>
				          <el-menu-item index="/admin/article">上传文章</el-menu-item>
				          <el-menu-item index="/admin/article/manage">文章管理</el-menu-item>
				          <el-menu-item index="/admin/article/recycle">回收站</el-menu-item>
				        </el-menu-item-group>
				      </el-submenu>
				      <el-submenu index="2">
				      	<template slot="title">
					        <i class="el-icon-picture"></i>
					        <span slot="title">图片</span>
				        </template>
				        <el-menu-item-group>
				          <el-menu-item index="/admin/image/upload">上传图片</el-menu-item>
				          <el-menu-item index="/admin/image/manage">管理图片</el-menu-item>
				          <el-menu-item index="/admin/image/recycle">回收站</el-menu-item>
				        </el-menu-item-group>
				      </el-submenu>
				      <el-menu-item index="3">
				        <i class="el-icon-view"></i>
				        <span slot="title">评论</span>
				      </el-menu-item>
				</el-menu>
			</el-header>
			<el-main class="admin-main-box">
				<div class="admin-content">
					<router-view></router-view>
				</div>
			</el-main>
		</el-container>
	</el-container>
</template>
<script>

module.exports = {
	data:function(){
		return{
			active_index:this.$route.path,
		}
	},
	methods: {
		selectMenu:function(index,indexPath){
			this.$router.push(index)
			this.active_index = this.$route.path
		}
	},
	created:function(){
	},
	mounted:function () {
  }
}

</script>
<style lang="scss" scoped="" type="text/css">
@import "../../../sass/app.scss";

#editor-trigger{
	div{
		flex-wrap: wrap;
	}
}
.admin-header{
	height: auto !important;
	padding: 0 !important;
	.hander-menu{
		display:flex;
	    margin: 0 !important;
	    flex-wrap: wrap;
	}
}
.admin-side-box{
	width: 13% !important;
	overflow-y: hidden;
	background-color:#545c64;
	// height: 100px;
	.admin-side{
		height: 100%;
	}
	.show-side{
		color: black;
		background-color: #777777;
		width: 100%;
		height: 100px;
		display: flex;
		align-items: center;
    	justify-content: center;
		div{
				display:inline-flex;
			    font-size: 40px;
    			align-items: baseline;
			i{
			    margin-right: 15px;
			}
		}
	}
}
.admin-content{
	width: 85%;
    margin: auto;
    margin-top: 40px;
}
.admin-item{
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
	.item-col{
		font-size: 30px;
    	padding: 0 30px;
	}
}
.admin-main-box{
	background-color: white;
}
@media #{$medie-type} and (max-width: $phone-size){
	.admin-side-box{
		width: 40% !important;
	}
	.admin-content{
		width: 100%;
		margin: auto;
	}
}

</style>