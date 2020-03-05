import Vue from 'vue'
import Vuex from 'vuex'

import clone from '@/model/clone';
import createId from '@/lib/idCreator';
import router from '../router/index';

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    recordList: [] as RecordItem[],
    tagList: [],
    currentTag:undefined 
  } as RootState,
  // getters:{
  //   recordList(state){
  //     return state.recordList
  //   },
  //   result(state){
  //     return state.tagList
  //   }
  // },
  mutations: {
    fetchRecords(state) {
      state.recordList = (JSON.parse(window.localStorage.getItem('recordList') || '[]')) as RecordItem[];

    },
    fetchTags(state) {
      state.tagList = (JSON.parse(window.localStorage.getItem('tagList') || '[]'))
      if(!state.tagList ||state.tagList.length===0){
        // state.tagList = [{id:'1',name:'衣'}]
      }
    },
    createRecords(state, record: RecordItem) {
      if(record.tags.length===0){
        window.alert('至少要选择一个标签哦')
        return
      }
      const value: RecordItem = clone(record)
      value.createdAt = new Date().toISOString();
      state.recordList.push(value);
      store.commit('saveRecords')
      window.alert("已保存");

    },
    saveRecords(state) {
      window.localStorage.setItem('recordList', JSON.stringify(state.recordList))
    },
    saveTags(state) {
      window.localStorage.setItem('tagList', JSON.stringify(state.tagList))
     
    },
    createTags(state, name: string) {
      
      const names = state.tagList.map(item => item.name)
      if (names.indexOf(name) >= 0) {
        window.alert("标签名重复");
      } else {
        const id = createId().toString()
        state.tagList.push({ id, name: name })
        store.commit('saveTags')
        window.alert("添加成功");
        
      }
    },
    updateTag(state, payload) {
      const idList = state.tagList.map(item => item.id)
      if (idList.indexOf(payload.id) >= 0) {
        const names = state.tagList.map(item => item.name)
        if (!(names.indexOf(payload.name) >= 0)) {
          const tag = state.tagList.filter(item => item.id === payload.id)[0]
          tag.name = payload.name
          tag.id = payload.id
          store.commit('saveTags')
        }
      }

    },
    findTag(state, id: string) {
      state.currentTag = state.tagList.filter(item => item.id === id)[0]

    },
    removeTag(state, id: string) {
      let index = -1
      for (let i = 0; i < state.tagList.length; i++) {
        if (state.tagList[i].id === id) {
          index = i
          break
        }
      }
      if (index) {
        state.tagList.splice(index, 1)
        store.commit('saveTags')
        window.alert("删除成功！三秒后自动返回");
        router.back();
      } else {
        window.alert("删除失败");
      }

    },

  },
  actions: {
  },
  modules: {
  }
})
export default store