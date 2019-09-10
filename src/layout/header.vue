<template>
  <div class="header">
    <div class="navbar clearfix">
      <div class="nav-left fl">
        <div class="hamburger-container" @click="toggleSideBar()">
          <a-icon style="fontSize:20px;fontWeight:bold;width:20px;height:20px;" :type="typeIcon" />
        </div>
      </div>
      <div class="nav-right fr">123</div>
    </div>
    <div class="tags-view-container">

    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    data() {
      return {
      }
    },
    created() {
    },
    methods: {
      toggleSideBar() {
        this.$store.dispatch('app/toggleSideBar')
      },
    },
    computed:{
      ...mapGetters([
        'sidebar'
      ]),
      typeIcon(){
        return this.sidebar.opened ? "menu-fold" : "menu-unfold"
      }
    }
  }
</script>

<style scoped>
.header{
  position: fixed;
  top: 0;
  width: calc(100% - 200px);
  background: #fff;
  z-index: 998;
  transition: width .28s;
}
.hideSidebar .header{
  width: calc(100% - 80px);
}
.mobile.hideSidebar .header{
  width: 100%;
}
.tags-view-container{
  height: 34px;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #d8dce5;
  box-shadow: 0 1px 3px 0 rgba(0,0,0,.12), 0 0 3px 0 rgba(0,0,0,.04);
}
.navbar{
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);
}
.navbar .hamburger-container{
  padding: 0px 15px;
  line-height: 50px;
  height: 100%;
  float: left;
  cursor: pointer;
  -webkit-transition: background .3s;
  transition: background .3s;
  -webkit-tap-highlight-color: transparent;
}
.navbar .hamburger-container:hover {
    background: rgba(0,0,0,.025);
}
</style>
