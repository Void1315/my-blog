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
						Le Petit Prince
					</p>
				</div>
				<div class="data-box">
					<i class="fa fa-calendar-plus-o"></i>
					<span>
						2018-08-14 22:45
					</span>
				</div>
			</el-row>
			<el-row>
				<el-col :md="{span:18,offset:3}" :xs="{span:24,offset:0}" class="text-box" >
					<p>asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd</p>
					<p>asdasd</p>
					<p>asdasd</p>
					<p>asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd</p>
					<p>asdasd</p>
					<p>asdasd</p>
					<hr>
					<p>asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd</p>
					<p>asdasd</p>
					<p>asdasd</p>
					<p>asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd</p>
					<p>asdasd</p>
					<p>asdasd</p>
				</el-col>
			</el-row>
			<el-row>
				<el-col >
					<hr class="side-hr">
				</el-col>
			</el-row>
			<el-row type="flex" justify="space-between">
				<div class="lable-box" >
					<div class="lable-item">
						<i class="fa fa-tag"></i>
						<span>PHP</span>
					</div>
					<div class="lable-item">
						<i class="fa fa-tag"></i>
						<span>Java</span>
					</div>
				</div>
				<div class="like-box" >
					<div class="lable-item">
						<i class="fa fa-thumbs-o-down"></i>
						<span>0</span>
					</div>
					<div class="lable-item">
						<i class="fa fa-thumbs-o-up"></i>
						<span>999+</span>
					</div>
					<div class="lable-item">
						<i class="fa fa-share-alt"></i>
					</div>
				</div>
			</el-row>
			<div class="comment-box">
				<br><br><br><br><br>
			</div>
		</div>
	</div>
</template>
<script>
	module.exports={
	    data:function(){
	     	return{
	     		
	    	}
	 	}
  	}
</script>
<style lang="scss" scoped="true" type="text/css">
@import "../../sass/app.scss";

.article-box{
	width: 90%;
	box-shadow: $clear-love-shadow;
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
}


</style>