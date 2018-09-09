<template>
	<div>
		<el-table
			:data="articleData"
			:default-sort = "{prop: 'created_at', order: 'descending'}"
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
		    	label="封面"
		    	prop="image"
		    >
		    	<template slot-scope="scope">
		    		<img :src="scope.row.image.url" class="table-img">
		      	</template>
		    </el-table-column>
	      	<el-table-column
		        prop="assent"
		        label="顶"
		        sortable
		        >
	      	</el-table-column>
	      	<el-table-column
		        prop="deleted_at"
		        label="是否删除"
		        
		        :formatter="formatter"
		        >
	      	</el-table-column>

	      	<el-table-column
		        prop="created_at"
		        label="创建日期"
		        sortable
		        >
	      	</el-table-column>
	      	<el-table-column label="操作"
	      		min-width="150"
	      	>
		      <template slot-scope="scope">
		        <el-button
		          size="mini"
		          @click="articleEdit(scope.$index, scope.row)">编辑</el-button>
		        <el-button
		          size="mini"
		          type="danger"
		          @click="articleDelete(scope.$index, scope.row)">删除</el-button>
		      </template>
		    </el-table-column>
		</el-table>
	</div>
</template>
<script>
module.exports={
	data:function(){
		return{
			articleData:[]
		}
	},
	methods:{
		getData(){
			var self = this;
			this.$ajax.get("/admin/article/list").then(function(response){
				self.articleData = response.data
			});
		},
		formatter(row, column) {
        	if(row=!null)
        		return "否"
        	else
        		return row
      	},
      	articleEdit(index,row){
      		// console.log(row.id)
      		this.$router.push("/admin/article/edit/"+row.id);
      	},
      	articleDelete(index,row){
      		console.log(row.id)
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
@import "../../../sass/app.scss";

</style>