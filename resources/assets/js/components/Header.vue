<template>
	<div class="header-box">
		<div class="search-box">
			<div>
				<input type="text" name="">
			</div>
			<i class="fa fa-search"></i>
		</div>
		<div class="item-box">
			<div class="head-home-box">
				<i class="fa fa-home"></i>
				<span class="hidden-md-and-down">Home</span>
			</div>
			<div class="head-img-box">
				<i class="fa fa-image"></i>
				<span class="hidden-md-and-down">Image</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
     data:function(){
     	return{
     		
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
		    position: relative;
		    left: 195px;
		    top: 7px;
		    font-size: 25px;
		}
	}
	.item-box{
	    position: relative;
    	right: 40px;
	    width: 280px;
	    display: flex;
	    justify-content: space-between;
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
	.header-box{
		height: 65px;
		border-bottom: $border-style;
		background-color: $back-color;
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
		i{
			left:195px;
		}
	}
}
</style>