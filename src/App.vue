<template>
  <div id="app">
    <Flood/>
  </div>
</template>

<script>
import Flood from './components/Flood.vue'

export default {
  name: 'App',
  components: {
    Flood
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
