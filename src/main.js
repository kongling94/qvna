// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//轮播组件
import VueAwesomeSwiper from 'vue-awesome-swiper' 

//移动端的300ms延迟解决方案
import FastClick from 'fastclick'   

import 'C/reset.css'

//移动端的1像素边框问题解决方案
import 'C/border.css' 

import 'C/iconfont.css'

//swiper的CSS
import 'swiper/dist/css/swiper.css' 

//注册组件
Vue.use(VueAwesomeSwiper); 




Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
