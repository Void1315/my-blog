<template>
	<div class="content">
		<article-over v-for="article in data" :article="article">
		</article-over>
		<hr class="hidden-md-and-up">
		<br><br><br><br><br><br><br>
	</div>
</template>

<script type="text/javascript">
	module.exports={
	    data:function(){
	     	return{
		     		data:"",
	    	}
	 	},
	 	methods:{
	 		getData(){
	 			var self = this;
	 			this.$ajax.get("/article/overview").then(function(response){
	 				self.data = response.data;
	 				console.log(self.data)
	 			})
	 		}
	 	},
	 	mounted:function () {
			var self = this;
			this.$nextTick(function () {
				self.getData()
			})
		}
  	}
</script>

<style lang="scss" scoped="" type="text/css">
@import "../../sass/app.scss";



</style>