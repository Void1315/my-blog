<template>
  <div>
    <el-table :data="recycleleData" :default-sort="{prop: 'created_at', order: 'descending'}">
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
          <el-button
            size="mini"
            type="success"
            @click="handleRestore(scope.$index, scope.row.id)"
          >恢复</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script type="text/javascript">
module.exports = {
  data: function() {
    return {
      recycleleData: []
    };
  },
  methods: {
    //获取删除图片数据
    getData: function() {
      var self = this;
      this.$ajax
        .get("/admin/image/recyclebin/index")
        .then(function(res) {
          self.recycleleData = res.data;
        })
        .catch(function(error) {
          console.log(error.res);
          self.$message.warning("出现了一些错误请稍后再试!");
        });
    },
    //作用格式化
    show_matter: function(row) {
      if (row.to_show == 1) return "相册";
      else return "文章";
    },
    //恢复图片
    handleRestore: async function() {
      var url = "/admin/image/recyclebin/index";
      var data = {};
      var res = await this.$ajax.get(url, data);
      console.log(res);
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