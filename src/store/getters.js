export default {
  /*
   getters相当于computed，用来修改state中的值
   第一个参数默认为state,第二个为getters属性本身,
   getters本身默认不能在调用时传参，如果想传递参数的话,只能将
   方法的返回值设置为函数，接收调用时传来的参数
 */
    setAge(state) {
        return state.stu.reduce((pre, cur) => {
            if (cur.age > 20) pre.push(cur)
            return pre
        }, [])
    },
    getLength(state, getters) {
        return getters.setAge.length
    },
    ItemAge(state) {
        return function (age) {
            return state.stu.filter((item) => item.age > age)
        }
    }
}