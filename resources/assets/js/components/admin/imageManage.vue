<template>
  <div class="main">
    <div class="from-box">
      <el-form :inline="true" :model="formInline" class="form-inline">
        <el-form-item label="图片作用">
          <el-select v-model="formInline.to_show" @change="selectChange" placeholder="图片作用">
            <el-option label="全部" value="-1"></el-option>
            <el-option label="文章" value="0"></el-option>
            <el-option label="相册" value="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click.native="onSubmitImg">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
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
          <img :src="scope.row.url" class="table-img" />
        </template>
      </el-table-column>
      <el-table-column prop="to_show" label="作用" align="center" :formatter="show_matter"></el-table-column>
      <el-table-column label="操作" min-width="150">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row.id)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-row type="flex" class="row-bg" justify="center">
      <el-pagination
        @current-change="tableCurrentChange"
        :current-page="pageData.current_page"
        :page-size="pageData.per_page"
        :page-sizes="[5,10,15,20,50,100]"
        :page-count="pageData.last_page"
        layout="sizes,total, prev, pager, next, jumper"
        :total="pageData.total"
        @size-change="tableSizeChange"
      ></el-pagination>
    </el-row>
  </div>
</template>
<script>
module.exports = {
  data: function() {
    return {
      formInline: {
        //筛选表单
        to_show: "全部"
      },
      imageData: [], //图片数据
      datanum: 0,
      thisPage: 0,
      tableFilter: {
        //表格筛选的数据
        to_show: -1, //作用
        page_sizes: 10, //一页显示几条数据
        current_page: 1 //当前页数
      },
      pageData: {
        // 分页数据
        current_page: 0, //当前页面
        total: 0,
        last_page: 0,
        per_page: 10,
        next_page_url: "",
        last_page_url: "",
        from: 0,
        to: 0,
        data: []
      },
      pageUrl: "", //分页地址
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
    /**
     * 表格页数显示条数改变时
     * pageSize:每页条数
     */
    tableSizeChange: function(pageSize) {
      this.pageData.per_page = pageSize; //per_page
      this.tableFilter.page_sizes = pageSize;
      this.getData();
    },
    /**
     * 表格当前页改变时
     * pageIndex :当前页
     */
    tableCurrentChange: function(pageIndex) {
      this.pageData.current_page = pageIndex;
      this.tableFilter.current_page = pageIndex;
      this.getPageData(pageIndex);
    },
    //获得分页数据
    getPageData: function(pageIndex) {
      var url = this.pageUrl + "?page=" + pageIndex;
      this.$ajax.post(url, this.tableFilter).then(res => {
        this.pageData = res.data;
        this.imageData = this.pageData.data;
        this.datanum = this.pageData.total;
        this.pageUrl = res.data.path;
        this.setPageDate();
        this.setImgItemNum();
      });
    },

    selectChange: function(value) {
      this.tableFilter.to_show = value;
    },
    onSubmitImg: function() {
      this.getData();
    },
    show_item_id: function(row) {
      if (row.item_id) {
        return row.item_id;
      } else {
        return "空";
      }
    },
    /**
     * data :object
     */
    getData: function() {
      var url = "/admin/image/list";
      this.$ajax.post(url, this.tableFilter).then(res => {
        this.pageData = res.data;
        this.imageData = this.pageData.data;
        this.datanum = this.pageData.total;
        this.pageUrl = res.data.path;
        this.setPageDate();
        this.setImgItemNum();
      });
    },
    /**
     * 更新分页数据
     */
    setPageDate: data => {},

    show_matter: function(row) {
      if (row.to_show == 1) return "相册";
      else return "文章";
    },
    handleEdit: function(index, row) {
      console.log(index, row);
    },
    handleDelete: function(index, image_id) {
      this.$confirm("是否图片移动至回收站?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          new Promise((resolve, reject) => {
            var url = "admin/image/delete";
            var data = {
              image_id: image_id
            };
            this.$ajax
              .post(url, data)
              .then(res => {
                resolve(res);
              })
              .catch(error => {
                reject(error);
              });
          })
            .then(res => {
              this.imageData.splice(index, 1);
              this.setImgItemNum();
              this.$message({
                type: "success",
                message: "删除成功!"
              });
            })
            .catch(error => {
              this.$message({
                type: "error",
                message: "删除失败!"
              });
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    setImgItemNum: function() {
      this.img_item_num = [];
      this.b_img_item = new Array(this.imageData.length).fill(false)
      for (let index in this.imageData) {
        if (this.imageData[index].item_id) {
          //如果存在分组
          if (!this.img_item_num[this.imageData[index].item_id]) {
            //如果是第一个则定义为0
            this.img_item_num[this.imageData[index].item_id] = 0;
            this.b_img_item[index] = true
          }
          //此分组数量++
          this.img_item_num[this.imageData[index].item_id]++;
        }
      }
    },
    objectSpanMethod: function({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 1) {
        if (this.img_item_num[row.item_id] && this.b_img_item[rowIndex]) {
          const _row = this.img_item_num[row.item_id];
          // this.img_item_num[row.item_id] = -1;
          const _col = _row > 0 ? 1 : 0;
          return {
            rowspan: _row,
            colspan: _col
          };
        }else{
          return {
            rowspan: 0,
            colspan: 0
          }
        }
      }
    }
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