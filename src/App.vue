<template>
  <div id="app">
    <Interest/>
  </div>
</template>

<script>
import Interest from './components/Interest.vue'  

export default {
  name: 'app',
  components: {
    Interest
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
