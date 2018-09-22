<template>
	<div>
		<el-table
		:data="recycleleData"
		:default-sort = "{prop: 'deleted_at', order: 'descending'}"
		>
			<el-table-column
		        prop="id"
		        label="ID"
		        >
	      	</el-table-column>
	      	<el-table-column
		        prop="title"
		        label="标题"
		        >
	      	</el-table-column>
	      	<el-table-column
		        prop="created_at"
		        label="创建时间"
		        >
	      	</el-table-column>
	      	<el-table-column
		        prop="deleted_at"
		        label="删除时间"
		        sortable
		        >
	      	</el-table-column>
	      	<el-table-column
		        prop="updated_at"
		        label="最后更新"
		        >
	      	</el-table-column>
		    <el-table-column label="操作" min-width="150">
		      <template slot-scope="scope">
		        <el-button
		          size="mini"
		          @click="articleEdit(scope.$index, scope.row.id)">编辑</el-button>
		        <el-button
		          size="mini"
		          type="danger"
		          @click="articleDelete(scope.$index, scope.row.id)">删除</el-button>
		      </template>
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
				this.$ajax.get("/admin/article/recyclebin/index").then(function(res){
					self.recycleleData = res.data
				}).catch(function(error){
					self.$message("出现了一些错误请稍后再试!");
					console.log(error.res)
				});
			},
	      	articleEdit(index,id){
      			this.$router.push("/admin/article/edit/"+id);
      		},
      		articleDelete(index,id){
      			this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
		          confirmButtonText: '确定',
		          cancelButtonText: '取消',
		          type: 'warning'
		        }).then(() => {
		          this.$ajax.get("/admin/article/solid/delete/"+id).then((res) => {
		          	this.recycleleData.splice(index, 1);
		          	this.$message({
			            type: 'success',
			            message: '删除成功!'
		          	});
		          }).catch((error) => {
		          	this.$message.warning("出现了一些错误请稍后再试!");
		          	console.log(res.error)
		          })
		        }).catch(() => {
		          this.$message({
		            type: 'info',
		            message: '已取消删除'
		          });          
		        });
      			
      		},
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