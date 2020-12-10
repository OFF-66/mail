export default {    // 模块a会被添加到store的state中
    state: {      // 获取时通过 this.$store.模块名.name 获取
        name: 'llllcx'
    },
    mutations: {   // 语法和store对象中的mutations一样
        setAState(state) {
            state.name = 'lccccx'
        }
    },
    getters: {     // gettes有第三个参数为rootState,Store的state
        changeAstate(state) {
            return state.name + 'getters'
        },
        changeAstate2(state, getters) {
            return getters.changeAstate + 'getters2'
        },
        changeAstate3(state, getters, rootState) {
            return getters.changeAstate + rootState.counter
        }
    },
    actions: {
        Aactions(context, payload) {
            return new Promise((resolve, reject) => {
                context.commit('setAState')
                resolve('1111')
            })
        }
    }
}