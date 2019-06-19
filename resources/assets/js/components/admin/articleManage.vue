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
			<el-row type="flex" class="row-bg" justify="center">
					<el-pagination
				      @current-change="handleCurrentChange"
				      :current-page="thisPage"
				      :page-size="15"
				      :pager-count="5"
				      layout="total, prev, pager, next, jumper"
				      :total="datanum">
			    	</el-pagination>
			</el-row>
		</div>
</template>
<script>
module.exports={
	data:function(){
		return{
			articleData:[],
			thisPage:0,
			datanum:0,
		}
	},
	methods:{
		getData(page){
			//
			var self = this;
			var url = "/admin/article/list";
			if(page)
				url = url+"?page="+page
			this.$ajax.get(url).then(function(response){
				self.articleData = response.data.data;
				self.datanum = response.data.total;
			});
		},
		formatter(row, column) {
        	if(row=!null)
        		return "否"
        	else
        		return row
      	},
      	articleEdit(index,row){
      		this.$router.push("/admin/article/edit/"+row.id);
      	},
      	articleDelete(index,row){
      		var self = this
      		this.$ajax.get("/admin/article/delete/"+row.id).then(function(res){
      			self.$message.success("软删除一篇文章，如果想物理删除，请到回收站!");
      			self.articleData.splice(index, 1);
      		}).catch(function(error){
      			 if(error.response) {
      			 	self.$message.error("出现了某些错误，请稍后再试！");
      			 }
      		});
      	},
      	handleCurrentChange:function(val){

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