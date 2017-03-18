import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible'
import './assets/css/font-awesome.css'
import './assets/css/style.css'

import axios from 'axios'
// 将axios挂载到vue对象的原型下边以实现全局通用
Vue.prototype.axios = axios


// 弄一个bus
// 在这里定义的bus并不能在全局通用
// var bus = new Vue()
Vue.filter('number',value =>{
  if(value > 10000){
    return (value / 10000).toFixed(2) + '万'
  }else{
    return value
  }
})
Vue.filter('message',value => {
  if(value.length > 15){
    return value.substr(0,14) + '...'
  }else{
    return value
  }
})

Vue.filter('myfilter',value => {
  if(value.length >6 ){
    return value.substr(0,5) + '...'
  }else{
    return value
  }
})


new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
