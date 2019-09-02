// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import "@babel/polyfill";
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store';
Vue.config.productionTip = false
import { Button,Menu,Icon } from 'ant-design-vue'
Vue.use(Button).use(Menu).use(Icon)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
