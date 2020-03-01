import Vue from 'vue'
import Vuex from 'vuex'

import clone from '@/model/clone';
import createId from '@/lib/idCreator';

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    recordList: [] as RecordItem[],
    tagList: [] as Tag[]
  },
  mutations: {
    fetchRecords(state) {
      state.recordList = (JSON.parse(window.localStorage.getItem('recordList') || '[]')) as RecordItem[];
      return state.recordList
    },
    fetchTags(state) {
      state.tagList = (JSON.parse(window.localStorage.getItem('tagList') || '[]'))
      return state.tagList;
    },
    createRecords(state, record) {
      const value: RecordItem = clone(record)
      value.createdAt = new Date();
      state.recordList.push(value);
      store.commit('saveRecords')

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
        return 'duplicated'
      } else {
        const id = createId().toString()
        state.tagList.push({ id, name: name })
        store.commit('saveTags')
        window.alert("添加成功");
        return 'success'
      }
    },
    // updateTag(state,id: string, name: string) {
    //   const idList = state.tagList.map(item => item.id)
    //   if (idList.indexOf(id) >= 0) {
    //     const names = this.tagList.map(item => item.name)
    //     if (names.indexOf(name) >= 0) {
    //       return 'duplicated'
    //     } else {
    //       const tag = this.tagList.filter(item => item.id === id)[0]
    //       tag.name = name
    //       tag.id = name
    //       this.saveTags()
    //       return 'success'
    //     }
    //   } else {
    //     return 'not found'
    //   }

    // },
    findTag(store, id: string) {
      const tag = store.tagList.filter(item => item.id === id)
      return tag;
    },
    removeTag(state, id: string) {
      let index = -1
      for (let i = 0; i < this.tagList.length; i++) {
        if (state.tagList[i].id === id) {
          index = i
          break
        }
      }
      state.tagList.splice(index, 1)
      // this.saveTags()
      return true
    },

  },
  actions: {
  },
  modules: {
  }
})
export default store