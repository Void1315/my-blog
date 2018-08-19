<template>
	<div class="article-box">
		<el-row>
				<div class="side-triangle">
				</div>
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
		<hr class="side-hr short-hr hidden-md-and-up">
		<el-row>
			<el-col :span="6" :offset="1" :xs="{span:24,offset:0}">
				<div class="img-box">
					<div class="img-shadow">
						<img src="img/article.jpg">
					</div>
				</div>
			</el-col>
			<el-col :span="12" :offset="2" :xs="{span:24,offset:0}">
				<div class="info-box">
					<p>有次潘子喝醉了，突然说，“你知道吗，魔礼海按的是一个Am和弦。”</p>
					<p>我说：“魔个头，不如魔力红。”</p>
					<p>潘子说：“我跟你讨论宗教时能不能正经点？”</p>
					<p>我心想，干，Am和弦很正经吗？人家弹的还是一琵琶…</p>
					<p>我好久没见潘子了，不过我见到了魔礼海。在西宁塔尔寺，青海游的第一站。</p>
					<p>我好久没见潘子了，不过我见到了魔礼海。在西宁塔尔寺，青海游的第一站。我好久没见潘子了，不过我见到了魔礼海。在西宁塔尔寺，青海游的第一站。我好久没见潘子了，不过我见到了魔礼海。在西宁塔尔寺，青海游的第一站。我好久没见潘子了，不过我见到了魔礼海。在西宁塔尔寺，青海游的第一站。</p>
				</div>
			</el-col>
		</el-row>
		<el-row type="flex" class="icon-box" justify="space-between">
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
			<div class="like-box">
				<div class="like">
					<i class="fa fa-thumbs-o-down"></i>
					<span>0</span>
				</div>
				<div class="like">
					<i class="fa fa-thumbs-o-up"></i>
					<span>999+</span>
				</div>
			</div>
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
	width: 90%;
	height: auto;
	margin: 0 auto;
	margin-top: 30px;
    margin-bottom: 25px;
	border: $border-style;
	border-radius: 3px;
    box-shadow: $clear-love-shadow;
    .head-box{
    	display: inline-block;
    	float: left;
    }
    .icon-box{
	    padding: 0px 45px;
        margin: 15px 0;
    }

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
	    display: inline-flex;
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
    // height: 190px;
    overflow: hidden;
    margin-top: 15px;
}
.title{
	font-size: 25px;
    font-weight: 600;
}
.like-box{
	display: inline-flex;
	flex-direction: row-reverse; 
    margin-top: 0;
	.like{
		@extend .inline-box;
	    margin-left: 40px;
	}
	.unlike{
		@extend .inline-box;
	    margin-left: 40px;
	}
}

@media #{$medie-type} and (max-width: $phone-size){
	.article-box{
		height: auto;
		border: none;
		box-shadow: none;
		margin: auto;
		width:90%;
		.head-box{
			display: block;
    		float: none;
    		margin-top: 10px;
    		p{
    			margin: 0;
    		}
		}
		.data-box{
			float:none;
			margin: 0;
		    display: block;
		}
		.side-triangle{
			display:none;
		}
		.img-box{
			height:auto;
		}
		.icon-box{
			padding: 0;
			margin: 0;
			margin-top: 15px;
			.like{
				display: inline-flex;
			    flex-wrap: wrap;
			    justify-content: center;
			}
		}
	}
}


</style>