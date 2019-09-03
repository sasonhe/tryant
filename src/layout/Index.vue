<template>
  <div class="app-wrapper" :class="openClass">
    <!-- 遮罩 -->
    <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside" />
    <!-- 侧边栏 -->
    <Slider/>
    <!-- 内容区域 -->
    <div class="main-container">
      <!-- 头部条 -->
      <Header/>
      <!-- 内容 -->
      <Main/>
    </div>
  </div>
</template>

<script>
  import Main from './main'
  import Slider from './slider'
  import Header from './header'
  import { mapGetters } from 'vuex'
  import ResizeMixin from './mixin/ResizeHandler'
  export default {
    mixins: [ResizeMixin],
    data() {
      return {

      }
    },
    created() {
    },
    methods: {
      handleClickOutside() {
        this.$store.dispatch('app/closeSideBar', { withoutAnimation: false })
      }
    },
    components:{
      Main,Slider,Header
    },
    computed:{
      ...mapGetters([
        'sidebar',
        'device'
      ]),
      openClass(){
        return {
          hideSidebar: !this.sidebar.opened,
          openSidebar: this.sidebar.opened,
          withoutAnimation: this.sidebar.withoutAnimation,
          mobile: this.device === 'mobile'
        }
      }
    }
  }
</script>

<style lang="less" type="text/less">
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
}
.main-container {
  min-height: 100%;
  position: relative;
  background: #f9f9f9;
  min-height: 100%;
  transition: margin-left .28s;
  position: relative;
}
.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}
</style>
