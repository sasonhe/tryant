<template>
  <div class="app-wrapper" :class="openClass">
    <!-- 遮罩 -->
    <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside" />
    <!-- 侧边栏 -->
    <div class="slider">
      <a-menu
          :defaultSelectedKeys="['1']"
          :defaultOpenKeys="['sub1']"
          mode="inline"
          theme="dark"
          :inlineCollapsed="!this.sidebar.opened"
        >
          <a-menu-item key="1">
            <a-icon type="pie-chart" />
            <span>Option 1</span>
          </a-menu-item>
          <a-menu-item key="2">
            <a-icon type="desktop" />
            <span>Option 2</span>
          </a-menu-item>
          <a-menu-item key="3">
            <a-icon type="inbox" />
            <span>Option 3</span>
          </a-menu-item>
          <a-sub-menu key="sub1">
            <span slot="title"><a-icon type="mail" /><span>Navigation One</span></span>
            <a-menu-item key="5">Option 5</a-menu-item>
            <a-menu-item key="6">Option 6</a-menu-item>
            <a-menu-item key="7">Option 7</a-menu-item>
            <a-menu-item key="8">Option 8</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub2">
            <span slot="title"><a-icon type="appstore" /><span>Navigation Two</span></span>
            <a-menu-item key="9">Option 9</a-menu-item>
            <a-menu-item key="10">Option 10</a-menu-item>
            <a-sub-menu key="sub3" title="Submenu">
              <a-menu-item key="11">Option 11</a-menu-item>
              <a-menu-item key="12">Option 12</a-menu-item>
            </a-sub-menu>
          </a-sub-menu>
        </a-menu>
    </div>
    <!-- 内容区域 -->
    <div class="main-container mleft">
      <!-- 头部条 -->
      <div class="header">
        <button type="button" name="button" @click="toggleSideBar()">BTN</button>
        <a-button type="primary" @click="toggleSideBar()">Primary</a-button>
      </div>
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

<style lang="less" type="text/less">

.slider{
  width: 200px;
  height: 100%;
  background: #263240;
  position: fixed;
  overflow:hidden;
  transition: width .28s;
  z-index: 999;
}
.openSidebar .slider{
  width: 200px;
}
.hideSidebar .slider{
  width: 80px;
  height: 100%;

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
  margin-left: 80px;
}
.mobile.hideSidebar .main-container{
  margin-left: 0;
}
.mobile.hideSidebar .slider{
  width: 0;

}
.ant-menu{
  width:100%;
  height:100%;
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
