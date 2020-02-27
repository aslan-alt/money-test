import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Layout from '@/components/Layout.vue';
import tagListModel from '@/model/tagListModel.ts';

Vue.component('Layout', Layout)
Vue.config.productionTip = false

window.tagList = tagListModel.fetch()
window.createTag = (name: string) => {
  if (name) {
    const message = tagListModel.create(name);
    if (message === "duplicated") {
      window.alert("标签名重复");
    } else if (message === "success") {
      window.alert("添加成功");
    }
  }
}
window.removeTag = (id: string) => {
  if (tagListModel.remove(id)) {
    return true
  } else {
    return false
  }
}
window.updateTag = (id: string,name: string)=>{
  return tagListModel.update(id, name);
}
window.findTag = (id: string)=>{
  console.log(`window${window.tagList.filter(item => item.id === id)[0]}`)
  return window.tagList.filter(item => item.id === id)[0];
}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
