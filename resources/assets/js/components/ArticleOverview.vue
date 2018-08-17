<template>
	<div class="article-box">
		<el-row>
			<el-col :span="6">
				<div class="side-triangle">
				</div>
			</el-col>
			<el-col :span="6" :offset="12" >
				<div class="data-box">
					<i class="fa fa-calendar-plus-o"></i>
					<span>
						2018-08-14 22:45
					</span>
				</div>
			</el-col>
		</el-row>
		<el-row>
			<el-col :span="6" :offset="1">
				<div class="img-box">
					<div class="img-shadow">
						<img src="img/article.jpg">
					</div>
				</div>
				<div class="lable-box">
					<div class="tag-item">
						<i class="fa fa-tag"></i>
						<span>Java</span>
					</div>
					<div class="tag-item">
						<i class="fa fa-tag"></i>
						<span>Java</span>
					</div>
					<div class="tag-item">
						<i class="fa fa-tag"></i>
						<span>Java</span>
					</div>
				</div>
			</el-col>
			<el-col :span="12" :offset="2">
				<div class="head-box">
					<p class="title">
						Le Petit Prince
					</p>
				</div>
				<div class="info-box">
					<p>有次潘子喝醉了，突然说，“你知道吗，魔礼海按的是一个Am和弦。”</p>
					<p>我说：“魔个头，不如魔力红。”</p>
					<p>潘子说：“我跟你讨论宗教时能不能正经点？”</p>
					<p>我心想，干，Am和弦很正经吗？人家弹的还是一琵琶…</p>
					<p>我好久没见潘子了，不过我见到了魔礼海。在西宁塔尔寺，青海游的第一站。</p>
					<p>我好久没见潘子了，不过我见到了魔礼海。在西宁塔尔寺，青海游的第一站。我好久没见潘子了，不过我见到了魔礼海。在西宁塔尔寺，青海游的第一站。我好久没见潘子了，不过我见到了魔礼海。在西宁塔尔寺，青海游的第一站。我好久没见潘子了，不过我见到了魔礼海。在西宁塔尔寺，青海游的第一站。</p>
				</div>
				<div class="like-box">
					<div class="unlike">
						<i class="fa fa-thumbs-o-down"></i>
						<span>0</span>
					</div>
					<div class="like">
						<i class="fa fa-thumbs-o-up"></i>
						<span>999+</span>
					</div>
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<script type="text/javascript">
	export default {
	    data:function(){
	     	return{
	     		
	    	}
	 	}
	}
</script>

<style lang="scss" scoped="ture" type="text/css">
@import "../../sass/app.scss";

.article-box{
	width: 75%;
	height: 340px;
	margin: 0 auto;
	margin-top: 30px;
    margin-bottom: 25px;
	border: $border-style;
	border-radius: 3px;
    box-shadow: $clear-love-shadow;

}

.img-box{
	width: 100%;
	height: 220px;
	.img-shadow{
		box-shadow: $radia-shadow;
		max-height: 230px;
		overflow: hidden;
		img{
		    height: auto;
	    	width: 100%;
	    	
		}
	}
}
.lable-box{
	    display: flex;
    	justify-content: space-between;
	.tag-item{
	    display: inline-flex;
        align-items: center;
	    margin-right: 20px;
		i{
			color:black;
			font-size: 1em;
		}
		span{
			font-size: 1em;
			font-weight: 900;
		}
	}
}
.info-box{
    height: 190px;
    overflow: hidden;
}
.title{
	font-size: 25px;
    line-height: 10px;
    margin-bottom: 30px;
    font-weight: 600;
}
.like-box{
	@extend .flex;
	flex-direction: row-reverse; 
    margin-top: 10px;
	.like{
		@extend .inline-box;
	    margin-left: 40px;
	}
	.unlike{
		@extend .inline-box;
	    margin-left: 40px;
	}
}
</style>