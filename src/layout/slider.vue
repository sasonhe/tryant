<template>
  <div class="slider" ref="divScroll">
    <div class="w-logo"></div>
    <GeminiScrollbar :autoshow="true">
      <a-menu
        :defaultSelectedKeys="[2]"
        :openKeys="this.sidebar.opened?openKeys:[]"
        mode="inline"
        theme="dark"
        @openChange="onOpenChange"
        :inlineCollapsed="!this.sidebar.opened"
        style="background:#263240"
      >
      <template  v-for="item in menu">
        <a-sub-menu v-if="item.subm === 1" :key="item.key">
          <span slot="title"><a-icon :type="item.icon" /><span>{{item.name}}</span></span>
          <a-menu-item v-for="items in item.child" :key="items.key">{{items.name}}</a-menu-item>
        </a-sub-menu>

        <a-menu-item v-else :key="item.key">
          <a-icon :type="item.icon" />
          <span>{{item.name}}</span>
        </a-menu-item>
      </template>

      </a-menu>
    </GeminiScrollbar>

  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    data() {
      return {
        rootSubmenuKeys: [],
        openKeys: [],
        menu:[
          {
            key:1,
            icon:"pie-chart",
            name:'一级菜单1',
            route:"/",
            subm:0
          },
          {
            key:2,
            icon:"pie-chart",
            name:'一级菜单2',
            route:"/tow",
            subm:0
          },
          {
            key:3,
            icon:"mail",
            name:'二级菜单1',
            subm:1,
            child:[
              {
                key:3.1,
                name:"子菜单1",
                route:"/a"
              },
              {
                key:3.2,
                name:"子菜单2",
                route:"/a"
              },
              {
                key:3.3,
                name:"子菜单3",
                route:"/a"
              },
              {
                key:3.4,
                name:"子菜单4",
                route:"/a"
              },
              {
                key:3.5,
                name:"子菜单5",
                route:"/a"
              },
              {
                key:3.6,
                name:"子菜单6",
                route:"/a"
              },
              {
                key:3.7,
                name:"子菜单7",
                route:"/a"
              },
            ]
          },
          {
            key:4,
            icon:"appstore",
            name:'二级菜单2',
            subm:1,
            child:[
              {
                key:4.1,
                name:"子菜单1",
                route:"/a"
              },
              {
                key:4.2,
                name:"子菜单2",
                route:"/a"
              },
              {
                key:4.3,
                name:"子菜单3",
                route:"/a"
              },
              {
                key:4.4,
                name:"子菜单4",
                route:"/a"
              },
              {
                key:4.5,
                name:"子菜单5",
                route:"/a"
              },
              {
                key:4.6,
                name:"子菜单6",
                route:"/a"
              },
              {
                key:4.7,
                name:"子菜单7",
                route:"/a"
              },
            ]
          },
          {
            key:5,
            icon:"appstore",
            name:'二级菜单3',
            subm:1,
            child:[
              {
                key:5.1,
                name:"子菜单1",
                route:"/a"
              },
              {
                key:5.2,
                name:"子菜单2",
                route:"/a"
              },
              {
                key:5.3,
                name:"子菜单3",
                route:"/a"
              },
              {
                key:5.4,
                name:"子菜单4",
                route:"/a"
              },
              {
                key:5.5,
                name:"子菜单5",
                route:"/a"
              },
              {
                key:5.6,
                name:"子菜单6",
                route:"/a"
              },
              {
                key:5.7,
                name:"子菜单7",
                route:"/a"
              },
            ]
          },
        ]
      }
    },
    created() {

    },
    mounted() {

    },
    methods: {
      onOpenChange (openKeys) {
        this.rootSubmenuKeys=[]
        this.menu.map((item) =>{
          this.rootSubmenuKeys.push(item.key);
        })
        const latestOpenKey = openKeys.find(key => this.openKeys.indexOf(key) === -1)
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
          this.openKeys = openKeys
        } else {
          this.openKeys = latestOpenKey ? [latestOpenKey] : []
        }
      },
    },
    computed:{
      ...mapGetters([
        'sidebar'
      ])
    },

  }
</script>

<style>
.w-logo{
  height: 84px;
  background: #263240;
}
.slider{
  width: 200px;
  height: 100%;
  background: #263240;
  position: fixed;
  top: 0;
  left: 0;
  overflow:hidden;
  transition: width .28s;
  z-index: 999;
}
.openSidebar .slider{
  width: 200px;
}
.hideSidebar .slider{
  width: 80px;

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
.ant-menu-dark .ant-menu-inline.ant-menu-sub{
  background: #1d2b38;
  box-shadow: 0 2px 8px rgba(29, 43, 56, 0.45) inset;
}
</style>
