<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="어서오세요 Vue를 함께 배워봅시다"/>
    <Interest/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'  
import Interest from './components/Interest.vue'  

export default {
  name: 'app',
  components: {
    HelloWorld,
    Interest
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
