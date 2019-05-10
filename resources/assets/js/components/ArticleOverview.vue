<template>
	<div class="article-box">
		<el-row>
				<div class="side-triangle">
				</div>
				<div class="head-box">
					<p class="title">
						{{article.title}}
					</p>
				</div>
				<div class="data-box">
					<i class="fa fa-calendar-plus-o"></i>
					<span>
						{{article.created_at}}
					</span>
				</div>
		</el-row>
		<hr class="side-hr short-hr hidden-md-and-up">
		<el-row>
			<el-col :span="6" :offset="1" :xs="{span:24,offset:0}">
				<div class="img-box">
					<div class="img-shadow">
						<img :src="article.img_url">
					</div>
				</div>
			</el-col>
			<el-col :span="12" :offset="2" :xs="{span:24,offset:0}">
				<a :href="'/#/article/'+article.id">
					<div class="info-box">
						<p v-html="rp(article.text)"></p>
					</div>
				</a>
			</el-col>
		</el-row>
		<el-row type="flex" class="icon-box" justify="space-between">
			<div class="lable-box">
				<div class="tag-item" v-for="tag in article.tages">
					<i class="fa fa-tag"></i>
					<span>{{ tag.name }}</span>
				</div>
			</div>
			<div class="like-box">
				<div class="like">
					<i class="fa fa-thumbs-o-up"></i>
					<span>{{article.assent}}</span>
				</div>
			</div>
		</el-row>
	</div>

</template>

<script type="text/javascript">
	export default {
		props: {
            article: ''
        },
	    data:function(){
	     	return{

	    	}
	 	},
	 	methods:{
	 		rp(test){
	 			test = test.replace(/<[^>]+>/g,"");
	 			return test;
	 		}
	 	}
	}
</script>

<style lang="scss"  type="text/css" scoped>
@import "../../sass/app.scss";
a{
	color: black;
}
a:hover{text-decoration:underline;color: #777777;}
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
    	    display: block;
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
		    margin-right: 4px;
		}
		span{
			font-size: 1em;
			font-weight: 900;
		}
	}
}
.info-box{
    overflow: hidden;
    height: 230px;
    word-wrap: break-word;
    p{
    	margin-top: 0px;
	    font-size: 15px;
    	font-weight: 500;
	    line-height: 20px;
    }
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

}




</style>