<template>
  <div>
    <el-table
      :data="imageData"
      :border="true"
      :span-method="objectSpanMethod"
      v-viewer="{title:false,movable:false}"
    >
      <el-table-column prop="id" label="ID"></el-table-column>
      <el-table-column prop="item_id" label="图片组" :formatter="show_item_id"></el-table-column>
      <el-table-column label="图像" prop="image">
        <template slot-scope="scope">
          <img :src="scope.row.url" class="table-img">
        </template>
      </el-table-column>
      <el-table-column
        prop="to_show"
				label="作用"
        
        :filter-method="filterImage"
        :filters="[{text:'文章',value:0},{text:'相册',value:1}]"
        align="center"
        :formatter="show_matter"
      ></el-table-column>
      <el-table-column label="操作" min-width="150">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row.id)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row.id)">删除</el-button>
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
        :total="datanum"
      ></el-pagination>
    </el-row>
  </div>
</template>
<script>
module.exports = {
  data: function() {
    return {
      imageData: [], //图片数据
      datanum: 0,
      thisPage: 0,
      img_item_num: [
        //imgitem中的数量
        //img_item:num
      ],
      b_img_item: [
        //img_item:false
        //是否被合并
      ],
      i: 0
    };
  },
  methods: {
    show_item_id: function(row) {
      if (row.item_id) {
        return row.item_id;
      } else {
        return "空";
      }
    },
    getData: function(page) {
      var self = this;
      var url = "/admin/image/list";
      if (page) url = "/admin/image/list" + "?page=" + page;
      this.$ajax.get(url).then((res)=> {
        self.imageData = res.data.data;
        self.datanum = res.data.total;
				self.setImgItemNum();
				console.log(this.imageData)
			});
			
    },
    setImgItemNum: function() {
      for (let index in this.imageData) {
        if (this.imageData[index].item_id) {
          if (!this.img_item_num[this.imageData[index].item_id]) {
            this.img_item_num[this.imageData[index].item_id] = 0;
          }
          this.img_item_num[this.imageData[index].item_id]++;
          this.b_img_item[this.imageData[index].item_id] = true;
        }
      }
    },
    show_matter: function(row) {
      if (row.to_show == 1) return "相册";
      else return "文章";
    },
    handleEdit: function(index, row) {
      console.log(index, row);
    },
    handleDelete: function(index, row) {
      console.log(index, row, this.imageData[index]);
    },
    handleCurrentChange: function(val) {
      this.getData(val);
    },
    objectSpanMethod: function({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 1) {
        if (this.img_item_num[row.item_id]) {
          const _row = this.img_item_num[row.item_id];
          this.img_item_num[row.item_id] = -1;
          const _col = _row > 0 ? 1 : 0;
          return {
            rowspan: _row,
            colspan: _col
          };
        }
      }
    }
  },
  filterImage: function(value, row, column) {
    console.log(11);
    return row.to_show === value;
  },
  mounted: function() {
    var self = this;
    this.$nextTick(function() {
      self.getData();
    });
  }
};
</script>
<style lang="scss" scoped="" type="text/css">
@import "../../../sass/app.scss";
</style>