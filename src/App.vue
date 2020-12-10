<template>
  <div id="app">
    <div>
      <h1>Vuex中的Modules</h1>
      <h2>{{ this.$store.state.a.name }}</h2>
      <h2>{{ this.$store.getters.changeAstate3 }}</h2>
      <button @click="setAState">设置Modules中的Mutations</button>
      <h1>Vuex中的响应式原理</h1>
      <h2>{{ $store.state.info }}</h2>
      <button @click="UpdateInfo">点击添加info</button>
      <h1>Vuex中的mutations属性使用,以及获取state中的状态</h1>
      <h2>Vuex中的Counter为:{{ $store.state.counter }}</h2>
      <button @click="add">修改Vuex里的counter++:</button>
    </div>
    <div>
      <button @click="sub">修改Vuex里的counter--:</button>
    </div>
    <div>
      <button @click="addCount(5)">修改Vuex里的counter一次加5:</button>
    </div>
    <h1>Vuex中的Getters属性的使用</h1>
    <h2>{{ $store.getters.setAge }}</h2>
    <h2>{{ $store.getters.getLength }}</h2>
    <h2>{{ $store.getters.ItemAge(10) }}</h2>
  </div>
</template>

<script>
export default {
  methods: {
    add() {
      this.$store.commit("INCREATE");
    },
    sub() {
      this.$store.commit("decreament");
    },
    addCount(num) {
      // this.$store.commit('addCount',num)
      this.$store.commit({
        type: "addCount",
        num,
      });
    },
    async UpdateInfo() {
      //  this.$store.commit('Updateinfo')
      // this.$set(this.$store.state.info,'name3','lll')
      let result = await this.$store.dispatch("ACTIONDATA", "数据传过去了");
      console.log(result);
    },
    async setAState() {
      // this.$store.commit("setAState");
      // console.log(this.$store);
      let result = await this.$store.dispatch("Aactions");
      console.log(result);
    },
  },
};
</script>

<style></style>
