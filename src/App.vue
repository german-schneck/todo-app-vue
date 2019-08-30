<template>
  <div id="app">
    <navigator />
    <router-view />
  </div>
</template>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    background: #FFF;
  }

  * {
    outline: none;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  ul, li {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
</style>

<script>
import Navigator from './components/Navigator.vue';

export default {
  components: {
    Navigator,
  },
};
</script>
