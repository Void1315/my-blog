<template>
  <div style="display: flex;background-color: rgb(147,147,147);">
    <left-windows
      imgurl="img/img.jpg"
      @switchContent="switchContent"
      @notShow="notShow"
      @toShow="toShow"
    ></left-windows>
    <div :class="['right-content',{'long':contentLong,'short':contentShort}]">
      <my-header></my-header>
      <transition name="slide-fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
    <to-top></to-top>
  </div>
</template>
<script>
import leftWindows from "./LeftWindows.vue";
import myHeader from "./Header.vue";
import toTop from "./ToTop.vue";
module.exports = {
  name:"index",
  components: {
    toTop,
    leftWindows,
    myHeader,
  },
  data: function() {
    return {
      contentLong: false,
      contentShort: true
    };
  },
  methods: {
    switchContent: function(event) {
      this.contentLong = !this.contentLong;
      this.contentShort = !this.contentShort;
    },
    notShow: function() {
      this.contentLong = true;
      this.contentShort = false;
    },
    toShow: function() {
      this.contentLong = false;
      this.contentShort = true;
    }
  },
  mounted: function() {
    var self = this;
    this.$nextTick(function() {
      if (window.screen.width < 992)
        self.$message.success({
          dangerouslyUseHTMLString: true,
          message: "<strong> <i>向右</i> 滑动显示侧边栏!</strong>"
        });
    });
  }
};
</script>
<style lang="scss" scoped="" type="text/css">
@import "../../sass/app.scss";
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(15px);
  opacity: 0;
}
.long {
  left: 0px;
}
.short {
  left: $right-set;
  @media #{$medie-type} and (max-width: $phone-size) {
    left: 0px;
  }
}
@media #{$medie-type} and (max-width: $phone-size) {
  .right-content {
    left: 0px;
  }
}
</style>