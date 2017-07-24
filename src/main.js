// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axois from "axios"
import store from "./store/store.js"
import './lib/animate.css'
import './lib/lodash.js'
// Vue.prototype.$ajax=axios
Vue.prototype.$ajax = axois
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  mounted(){
    
    this.$ajax.get("./static/data.json").then((data)=>{
     
     
      this.$store.dispatch("getData",data.data.list)
    })
  }
})
