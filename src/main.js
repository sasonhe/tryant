// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import "@babel/polyfill";
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store';
import '@/assets/css/public.css'
Vue.config.productionTip = false
import { Button,Menu,Icon,Tabs } from 'ant-design-vue'
Vue.use(Button).use(Menu).use(Icon).use(Tabs)
import GeminiScrollbar from 'vue-gemini-scrollbar'
Vue.use(GeminiScrollbar)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
