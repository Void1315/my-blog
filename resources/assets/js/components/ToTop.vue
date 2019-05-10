<template>
	<transition name="el-fade-in-linear">
		<div class="top-box" @click="toTop" v-show="ishidde">
			<i class="fa fa-angle-up">
				
			</i>
		</div>
	</transition>
</template>
<script>
	export default {
     data:function(){
     	return{
     		touchLocation:0,
     		moveLocation:0,
     		ishidde:true,
    	}
 	},
 	methods:{
 		toTop:function(){
 			document.body.scrollTop = 0;
    		document.documentElement.scrollTop = 0;
 		},
 		upMove:function(){

 		}
 	},
 	created:function(){
 		var this_ = this
		window.addEventListener("touchmove", function(event){
			this_.ishidde = this_.moveLocation-document.documentElement.scrollTop>0?true:false;
	        this_.moveLocation = document.documentElement.scrollTop;
        });
 	}
  }
</script>
<style lang="scss" scoped="true" type="text/css">
@import "../../sass/app.scss";
$top-siez:50px;
$phone-top-size:35px;
.top-box{
	cursor:pointer;
    position: fixed;
    // opacity: .5;
    line-height: 45px;
    left: 95%;
    font-size: $top-siez;
    bottom: 10%;
	width: $top-siez;
    height: $top-siez;
    background-color: #7777;
    display: flex;
    justify-content: center;
    i{
    	color: white;
    }
}
@media #{$medie-type} and (max-width: $phone-size){

	.top-box{
		width: $phone-top-size;
	    height: $phone-top-size;
	    font-size: $phone-top-size;
		// opacity: .5;
		left: 87%;
	    bottom: 3.5%;
	    line-height: auto;
	}
}


</style>