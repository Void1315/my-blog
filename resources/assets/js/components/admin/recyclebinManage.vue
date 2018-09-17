<template>
	<div>
		<el-table
		:data="recycleleData"
		:default-sort = "{prop: 'created_at', order: 'descending'}"
		>
			<el-table-column
		        prop="id"
		        label="ID"
		        >
	      	</el-table-column>
		</el-table>
	</div>
</template>
<script type="text/javascript">
	module.exports = {
		data:function(){
			return {
				recycleleData:[],
			}
		},
		methods:{
			getData:function(){
				var self = this
				this.$ajax.get("/admin/recyclebin/show").then(function(res){
					console.log(res)
				}).catch(function(error){
					console.log(error.res)
				});
			}
		},
		mounted:function(){
			var self = this
			this.$nextTick(function () {
				self.getData()
			})
		}
	}
</script>
<style lang="scss" scoped="" type="text/css">
@import "../../../sass/app.scss";

</style>