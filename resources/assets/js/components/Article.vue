<template>
	<div class="content">
		<div class="article-box">
			<el-row>
				<el-col :span="4" :lg="{span:2}">
					<div class="side-triangle article-triangle">
					</div>
				</el-col>
				<div class="head-box">
					<p class="title">
						{{data.title}}
					</p>
				</div>
				<div class="data-box">
					<i class="fa fa-calendar-plus-o"></i>
					<span>
						{{data.created_at}}
					</span>
				</div>
			</el-row>
				<el-row >
					<el-col :md="{span:18,offset:3}">
						<img :src="data.img_url" class="article-img-box">
					</el-col>
				</el-row>
			<el-row>
				<el-col :md="{span:18,offset:3}" :xs="{span:24,offset:0}" class="text-box" v-html="data.text">	
				</el-col>
			</el-row>
			<el-row>
				<el-col >
					<hr class="side-hr">
				</el-col>
			</el-row>
			<el-row type="flex" class="bottom-icon-box" justify="space-between">
				<div class="lable-box" >
					<div class="tag-item" v-for="tag in data.tages">
						<i class="fa fa-tag"></i>
						<span>{{ tag.name }}</span>
					</div>
				</div>
				<div class="like-box" >
<!-- 					<div class="lable-item">
						<i class="fa fa-thumbs-o-down"></i>
						<span>0</span>
					</div> -->
					<div class="lable-item">
						<i class="fa fa-thumbs-o-up"></i>
						<span>{{ data.assent }}</span>
					</div>
					<div class="lable-item">
						<i class="fa fa-share-alt"></i>
					</div>
				</div>
			</el-row>
			<div class="comment-box">
				<!--PC和WAP自适应版-->

			</div>
		</div>
	</div>
</template>
<script>
	module.exports={
	    data:function(){
	     	return{
	     		data:'',
	    	}
	 	},
	 	methods:{
	 		getData(){
	 			var self = this;
	 			this.$ajax.get("/article/get/"+this.$route.params.id).then(function(response){
	 				 self.data = response.data;
	 			})
	 		}
	 	},
	 	mounted:function(){
	 		var self = this;
			this.$nextTick(function () {
				self.getData()
				console.log(self.data)
			})
	 	},
  	}
</script>
<style lang="scss" scoped="true" type="text/css">
@import "../../sass/app.scss";
.article-img-box{
	height: auto;
	width: 100%;
    display: block;
}
.article-box{
	width: 90%;
	border-radius: 3px;
	border: $border-style;
    margin: 20px auto;
    padding-bottom: 20px;
}
.text-box{
	p{
    	word-break: break-word;
	}
}
.article-triangle{
	border-width: 45px;
	$triangle-color:black;
	border-color: $triangle-color transparent transparent $triangle-color;
}
.title{
    margin-top: 20px;
	font{
	    font-size: 35px;
	}
}
.lable-item
{
	display: inline-flex;
	margin-right: 10px;
    align-items: center;
    span{
    	    margin-left: 5px;
    }
    i{
	    font-size: 20px;
    }
}
.comment-box{
	@extend .border-shadow;
	margin: 0 55px;
    margin-top: 20px;
}
.comment-text{
	box-shadow: $clear-love-shadow;
}
.lable-box{
	display: inline-block;
}
.like-box{
	display: inline-block;
}
.bottom-icon-box{
	padding: 0px 100px;
}
@media #{$medie-type} and (max-width: $phone-size){
	.article-box{
		height: auto;
		border: none;
		box-shadow: none;
		margin: auto;
		width:90%;
	}
	.side-triangle{
		display:none;
	}
	.bottom-icon-box{
		padding: 0;
	}
}


</style>