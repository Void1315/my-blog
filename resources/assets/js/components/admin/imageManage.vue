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
		    <el-table-column label="操作">
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
	</div>
</template>
<script>
module.exports={
	data:function(){
		return{
			imageData:[],
		}
	},
	methods:{
		getData:function(){
			var self = this;
			this.$ajax.get("/admin/image/list").then(function(res){
				self.imageData = res.data;
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