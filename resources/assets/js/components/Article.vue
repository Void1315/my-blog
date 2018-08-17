<template>
	<div class="content">
		<div class="article-box">
			<el-row>
				<el-col :span="2">
					<div class="side-triangle article-triangle">
					</div>
				</el-col>
				<el-col :span="6"  :offset="1">
					<div class="title">
						<font>
							标题字要大
						</font>
					</div>
				</el-col>
				<el-col :span="6" :offset="9" >
					<div class="data-box">
						<i class="fa fa-calendar-plus-o"></i>
						<span>
							2018-08-14 22:45
						</span>
					</div>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="18" :offset="3" >
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
				<el-col :span="22" :offset="1" >
					<hr class="side-hr">
				</el-col>
			</el-row>
			<el-row>
				<el-col class="lable-box" :span="3" :offset="1">
					<div class="lable-item">
						<i class="fa fa-tag"></i>
						<span>PHP</span>
					</div>
					<div class="lable-item">
						<i class="fa fa-tag"></i>
						<span>Java</span>
					</div>
				</el-col>
				<el-col class="like-box" :span="3" :offset="16">
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
				</el-col>
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
<style lang="scss" scoped="" type="text/css">
@import "../../sass/app.scss";

.article-box{
	width: 90%;
	box-shadow: $clear-love-shadow;
	border-radius: 3px;
	border: $border-style;
    margin: 20px auto;
    padding-bottom: 20px;
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
</style>