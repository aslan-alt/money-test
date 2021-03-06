import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Layout from '@/components/Layout.vue';


Vue.component('Layout', Layout)
Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


window.onload = function(){
  this.setTimeout(()=>{
    window.scrollTo(0,1000)
  },0)
}