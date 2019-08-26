<template>
  <div class="app-wrapper" :class="openClass">
    <!-- 遮罩 -->
    <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside" />
    <!-- 侧边栏 -->
    <div class="slider">

    </div>
    <!-- 内容区域 -->
    <div class="main-container mleft">
      <!-- 头部条 -->
      <div class="header"><button type="button" name="button" @click="toggleSideBar()">BTN</button></div>
      <!-- 内容 -->
      <Main/>
    </div>
  </div>
</template>

<script>
  import Main from './main'
  import { mapGetters } from 'vuex'
  import ResizeMixin from './mixin/ResizeHandler'
  export default {
    mixins: [ResizeMixin],
    data() {
      return {
        open:true
      }
    },
    created() {
    },
    methods: {
      handleClickOutside() {
        this.$store.dispatch('app/closeSideBar', { withoutAnimation: false })
      },
      toggleSideBar() {
        this.$store.dispatch('app/toggleSideBar')
      },
    },
    components:{
      Main
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

<style>
.slider{
  width: 200px;
  height: 100%;
  background: #263240;
  position: fixed;
  z-index: 999;
}
.openSidebar .slider{
  width: 200px;
}
.hideSidebar .slider{
  width: 0;
  height: 100%;
  position: fixed;

}
.slider{
  transition: width .28s;
}
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
.openSidebar .main-container{
  margin-left: 200px;
}
.hideSidebar .main-container{
  margin-left: 0;
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
