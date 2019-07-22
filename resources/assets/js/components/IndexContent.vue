<template>
	<div class="content" id="yhy">
		<article-over v-for="(article,index) in data" :key="index" :article="article" v-loading="loading">
		</article-over>
		<hr class="hidden-md-and-up">
	</div>
</template>

<script type="text/javascript">
	module.exports={
	    data:function(){
	     	return{
		     		data:"",
		     		loading:true,
	    	}
	 	},
	 	methods:{
	 		getData(){
	 			var self = this;
	 			this.$ajax.get("/article/overview").then(function(response){
	 				self.data = response.data;
	 				self.loading = false;
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