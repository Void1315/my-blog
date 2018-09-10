<template>
	<div>
		<el-table
			:data="imageData"
			v-viewer="{title:false,movable:false}"
		>
			<el-table-column
		        prop="id"
		        label="ID"
		        >
		    </el-table-column>
		    <el-table-column
		    	label="图像"
		    	prop="image"
		    >
		    	<template slot-scope="scope">
		    		<img :src="scope.row.url" class="table-img">
		      	</template>
		    </el-table-column>
		    <el-table-column
		    	label="作用"
		    	prop="to_show"
		    	:formatter="show_matter"
		    >
		    </el-table-column>
		    <el-table-column label="操作" min-width="150">
		      <template slot-scope="scope">
		        <el-button
		          size="mini"
		          @click="handleEdit(scope.$index, scope.row.id)">编辑</el-button>
		        <el-button
		          size="mini"
		          type="danger"
		          @click="handleDelete(scope.$index, scope.row.id)">删除</el-button>
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
			imageData:[],
			datanum:0,
			thisPage:0,
		}
	},
	methods:{
		getData:function(page){
			var self = this;
			var url = "/admin/image/list"
			if(page)
				url = "/admin/image/list"+"?page="+page
			this.$ajax.get(url).then(function(res){
				self.imageData = res.data.data;
				self.datanum = res.data.total;
			})
		},
		show_matter:function(row){
			if(row.to_show==1)
				return "相册"
			else
				return "文章"
		},
		handleEdit:function(index,row){
			console.log(index,row)
		},
		handleDelete:function(index,row){
			console.log(index,row)
		},
		handleCurrentChange:function(val){
			this.getData(val)
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