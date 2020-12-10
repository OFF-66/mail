import {ACTIONDATA} from './mutations-type'
export default {
    /*
   actions是代替mutations处理异步操作的，该属性的方法中默认参数为context
   相当于store对象,一般actions方法都return一个promise用来处理异步请求
   在promise中提交mutations方法。
   然后再组件中使用this.$store.dispath('actions方法',参数)来提交acitons方法
 */
        ACTIONDATA(ctx, payload) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    ctx.commit('Updateinfo')
                    resolve('111')
                }, 1000)
            })
        }
}