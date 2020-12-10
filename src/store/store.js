import Vue from 'vue'
import Vuex from 'vuex'
import {INCREATE,ACTIONDATA} from './mutations-type'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'
import moduleA from './modules/a'
// 挂载Vuex
Vue.use(Vuex)
//实例化Vuex
let store = new Vuex.Store({
  // state 属性用来存放全局共享属性
  state: {
    counter: 0,
    stu: [
      { name: 'lcx1', age: 20 },
      { name: 'lcx2', age: 30 },
      { name: 'lcx3', age: 40 },
      { name: 'lcx4', age: 50 }
    ],
    info : {
      name : {
        name1:'lcx',
        name2:'lcx2'
      },
      age : 20,
      sex : '男'
    }
  },
  mutations,
  getters,
  actions,
  modules : {
    a : moduleA
  }
})
export default store