<template>
	
	<div class="left-all">
		<!-- <transition name="el-fade-in-linear" > -->
			<div class="shadow" v-show="show" @click="hiddenLeft">
			
			</div>
		<!-- </transition> -->
		<transition name="el-fade-in-linear">
			<div v-show="show" :class="{'to-show':to_show,'to-hide':!to_show}">
				<div class="background-icon-box">
					<div class="left-top">
					</div>		
					<div class="left-img-icon-box">
						<div class="left-img-border">
							<div class="left-img-box">
								<img :src="imgurl">
							</div>
						</div>
						
						<div class="left-icon-box">
							<i class="fa fa-qq"></i>
							<i class="fa fa-github"></i>
							<i class="fa fa-google"></i>
							<i class="fa fa-twitter"></i>
						</div>
					</div>
				</div>
				<div class="info-font-box">
					<div class="name-font">
						<font>
							Asahi
						</font>
					</div>
					<div class="info-font">
						<font>
							&nbsp;&nbsp;&nbsp;&nbsp;最初我们来到这个世界，是因为不得不来；最终我们离开这个世界，是因为不得不走。
						</font>
					</div>
				</div>
					
					<div class="left-hr">
					</div>
					<div class="left-bot-box">
						<p>Cling Tight</p>
						<p>You are the breeze, and I am the moon</p>
						<p>Be it spring or fall</p>
						<p>My shadow clings to yours, bane or boon</p>
						<p>I am the plum, and you are the snow</p>
						<p>Be it frost or ice</p>
						<p>Your spirit runs to mine, fast or slow</p>
					</div>
					<div class="foot-info-box">
						<div class="left-hr" style="margin-bottom: 5px;">
						</div>
						<div class="left-foot-box">
							<div class="left-foot-left">
								<i class="fa fa-copyright"></i>
								<span>2019 <a style="color:#636b6f;" href="http://www.beian.miit.gov.cn" target="_blink">豫ICP备17029062号</a></span>
							</div>
							<div class="left-foot-right">
								<span>by Asahi</span>
							</div>
						</div>
					</div>
			</div>
			
		</transition>
		<div :class="['hide-left-box',{'to-left':to_show,'to-right':!to_show}]" @click="switchLeft">
			<i :class="['fa','fa-angle-double-left']"></i>
		</div>
	</div>
</template>

<script>
  export default {
  	props:['imgurl'],
     data:function(){
     	return{
     		show:true,
     		to_show:true,
     		rightMove:0,
     		touchX:0,
     		touchY:0,
    	}
 	},
 	methods:{
 		switchLeft:function(event){
 			this.show = !this.show;
        	this.to_show = !this.to_show;
			this.to_hide = !this.to_hide;
	    	this.$emit('switchContent');
 			
 		},
 		hiddenLeft:function(){
 			this.show = false;
 		},
 		phoneHiddenLeft:function(){
 			if(window.screen.width<=992)
 				this.show = false;
 		},
 		initShow:function(){//初始化检查窗口状态
 			if(this.show){
	 			this.$emit('toShow');
	 			this.to_show = true;
 			}else{
 				this.$emit('notShow');
 				this.to_show = false;
 			}
 			
 		}
 	},
 	created:function(){
 		var this_ = this
 		window.onresize=function(){
 			this_.initShow()
 		};
		window.addEventListener("touchmove", function(event){
			if(Math.abs(this_.touchY-event.touches[0].clientY)<150)
			if(event.touches[0].clientX - this_.touchX>150)
				this_.show = true;
			else if(this_.touchX - event.touches[0].clientX>150)
				this_.show = false;
        });
        window.addEventListener("touchstart",function(event){
        	this_.touchX = event.touches[0].clientX;
        	this_.touchY = event.touches[0].clientY;
        });
        this.phoneHiddenLeft();
 	}
  }

</script>

<style lang="scss" scoped="" type="text/css">
	@import "../../sass/app.scss";

	.shadow{
		width: 19200px;
	    height: 19200px;
	    position: fixed;
	    z-index: 1;
	    background-color: black;
	    opacity: 0.5;

	}
	.left-base{
		box-shadow: $clear-love-shadow;
		width:330px;
		height: 100%;
		position:fixed;
		background-color: $c-color;
		display: inline-flex;
		flex-direction: column;
		transition: all .5s;
		left:0px;
		z-index: 3;
	}
	.to-show{
		@extend .left-base;
		left:0px;
	}
	.to-hide{
		@extend .left-base;
		left:-330px;
	}
	.left-top{
		height: 105px;
    	position: relative;
		background-color: $back-color;
		box-shadow: $clear-love-shadow;
	}
	.left-img-icon-box{
		@extend .item-ctent;
		position: relative;
    	top: -70px;
    	i{
    		@extend .on-cursor;
    	}
		.left-img-border
		{
			@extend .item-ctent;
			@extend .cy;
			width: 110px;
			height: 110px;

		    margin-left: 37px;
			.left-img-box{
				@extend .cy;
				width: 100px;
				height: 100px;
	    		overflow: hidden;
				img{
				    height: auto;
				    width: 100%;
				}
			}
			
		}

		.left-icon-box
		{
			width: 135px;
			height: 130px;
		    display: flex;
		    flex-wrap: wrap;
		    align-items: center;
		    justify-content: space-evenly;
		    margin-left: 22px;
			i{
				color:black;
				font-size: 51px;
			}
		}
	}
	.left-hr{
		display: block;
	    unicode-bidi: -webkit-isolate;
	    unicode-bidi: isolate;
	    -webkit-margin-before: 0.5em;
	    -webkit-margin-after: 0.5em;
	    -webkit-margin-start: auto;
	    -webkit-margin-end: auto;
	    overflow: hidden;
	    border-style: inset;
	    border-width: 0.5px;
	    border-color: #4F4F4F;
	    margin: 20px 0;
    	width: 100%;
	}
	.left-bot-box{
		@extend .item-ctent;
		flex:1;
	    flex-direction: column;
	}
	.left-foot-box{
		display: flex;
	    justify-content: space-between;
	    padding: 0px 20px;
		.left-foot-left{
			display: inline-block;
		}

		.left-foot-right{
			display: inline-block;
		}
	}
.background-icon-box{
	height: 180px;
}
.info-font-box{
    .name-font{
		display: inline-block;
	    position: relative;
	    left: 65px;
	    font{
    	    font-size: 18px;
    		font-weight: bolder;

	    }
	}
	.info-font{
	    position: relative;
	    left: 40px;
	    max-width: 250px;
	    font{
	    	font-size: 14px;
    		font-weight: normal;
	    }
	}
}
.foot-info-box{
	position: relative;
    bottom: 0px;
    width: 100%;
    margin-bottom: 10px;
}
.hide-left-box{
	z-index: 1000;
	position: fixed;
    transition: all .5s;
    top: 50%;
    @extend .on-cursor;
	i{
		color:black;
		font-size: 58px;
	}
}
.to-left{
	left: 340px;
	transform:rotate(360deg);
}
.to-right{
	left: 0px;
	transform:rotate(180deg);
}
@media #{$medie-type} and (max-width: $phone-size){
	.left-all{
		// display:none;
	}
	.hide-left-box{
		display: none;
	}
	.left-bot-box{
		p{
			margin: 0;
			margin-top: 10px;
		}
	}
	
}
@media #{$medie-type} and (max-height: 700px){
	.left-bot-box{
		p{
			margin: 0;
			margin-top: 10px;
		}
	}
}
@media #{$medie-type} and (min-width: $phone-size){
	.shadow{
		display: none;
	}
}

</style>