<template>
	<div class="header-box">
		<div class="search-box" v-bind:class="{active:b_focus}">
			<div>
				<input  type="text" name="" @focus="onfocus" @blur="onblur">
			</div>
			<i class="fa fa-search on-cursor"  v-bind:class="{i_active:b_focus}"></i>
		</div>
		<div class="item-box">
			<div class="head-img-box on-cursor" @click="back">
				<i class="fa fa-mail-reply"></i>
				<span class="hidden-md-and-down">Back</span>
			</div>
			<div class="head-home-box">
				<a href="/#/">
					
				
				<i class="fa fa-home"></i>
				<span class="hidden-md-and-down">Home</span>
				</a>
			</div>
			<div class="head-img-box">
				<a href="/#/image">
				<i class="fa fa-image"></i>
				<span class="hidden-md-and-down">Image</span>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
     data:function(){
     	return{
     		b_focus :false,
    	}
 	},
 	methods:{
 		back:function(){
 			this.$router.go(-1);
 		},
 		onfocus:function(){
 			this.b_focus=true;
 		},
 		onblur:function(){
 			this.b_focus = false;
 		}
 	}
  }
</script>

<style lang="scss" scoped="" type="text/css">
	@import "../../sass/app.scss";
	.header-box{
		@extend .item-ctent;
		height: 105px;
		width: 100%;
		background-color: $c-color;
    	justify-content: space-between;

	}
	.active{
		width: 430px !important;
	}
	.i_active{
		left:440px !important;
	}
	.search-box{
		position: relative;
    	left: 50px;
	    width: 230px;
	    height: 45px;
	    top: 0px;
	    z-index: 2;
	    background-color: #f6f6f6;
	    border-color: rgb(113, 113, 113);
	    border-radius: 6px;
	    font-size: 20px;
	    border-width: 1px;
	    border-style: solid;
	    text-align: left;
	    font-weight: normal;
	    font-style: normal;
	    opacity: 1;
	    transform: rotate(0deg);
	    color: black;
	    transition: .5s ease;
	    input{
    	    padding: 0 8px;
		    display: block;
		    position: absolute;
		    left: 0;
		    width: 87%;
		    height: 100%;
		    font-size: inherit;
		    font-weight: inherit;
		    font-style: inherit;
		    color: inherit;
		    border: none;
		    border-radius: inherit;
		    outline: none;
		    background: inherit;
		    text-align: inherit;
		    line-height: inherit;
		    resize: none;
	    }
		i{
			transition: .5s ease;
		    position: relative;
		    left: 195px;
		    top: 7px;
		    font-size: 25px;
		}
	}
	.item-box{
	    position: relative;
    	right: 40px;
	    width: 380px;
	    display: flex;
	    justify-content: space-between;
		a{
			color: black;
			text-decoration:none;
		}
	    .head-home-box{
    	    display: inline-block;
	    }
	    .head-img-box{
    	    display: inline-block;
	    }
	    font-size: 30px;
		color: black;
	}
@media #{$medie-type} and (max-width: $phone-size){
	.active{
		width: 190px !important;
	}
	.i_active{
		left:160px !important;
	}
	.header-box{
		height: 65px;
		border-bottom: $border-style;
	    background-color: white;
	}
	.item-box{
		width: auto;
		right: 15px;
		i{
			margin-left: 20px;
		}
		
	}
	.search-box{
		left:10px;
		width: 190px;
		i{
			left:160px;
		}
	}
}
</style>