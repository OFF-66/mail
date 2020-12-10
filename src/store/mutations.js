import {INCREATE} from './mutations-type'
import Vue from 'vue'
export default {
    /*
  mutations 用来修改state的状态,
  只有通过该属性修改的state才会被Devtools监听到
  mutations中的方法的参数都默认是state,
  在全局组件中使用时通过 $store.commit('mutations方法名')
 */
        INCREATE(state) {
            state.counter++;
        },
        decreament(state) {
            state.counter--;
        },
        addCount(state, { num }) {
            state.counter += num
        },
        Updateinfo(state) {
            // state.info.name.name3 = 'lll'
            // Vue.set(state.info,'name3','lll')
            // Vue.set(state.info.name,'name1','l')
            // state.info.address = '洛阳'
            // delete state.info.name.name2
            Vue.delete(state.info.name, "name1")
        }
}