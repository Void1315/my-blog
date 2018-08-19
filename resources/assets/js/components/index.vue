<template>
	<div style="display: flex;background-color: rgb(147,147,147);">
		<left-windows imgurl="img/img.jpg" @switchContent="switchContent">
		</left-windows>
		<div :class="['right-content',{'long':contentLong,'short':contentShort}]">
			<my-header>
			</my-header>
			<router-view></router-view>
		</div>
		
	</div>
</template>
<script>
	module.exports = {
		data:function(){
			return{
				contentLong:false,
				contentShort:true,
			}
		},
		methods:{
				switchContent:function(event){
					this.contentLong = !this.contentLong;
					this.contentShort = !this.contentShort;
				}
			}
	}
</script>
<style lang="scss" scoped="" type="text/css">
@import "../../sass/app.scss";

.long{
	left:0px;
}
.short{
	left:$right-set;
	@media #{$medie-type} and (max-width: $phone-size){
		left: 0px;
	}
}
@media #{$medie-type} and (max-width: $phone-size){
	.right-content{
		left:0px;
	}
}
</style>