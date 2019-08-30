<template>
  <header id="app-header">
    <div class="title">
      <img src="../assets/logo.png" alt="Vue.js Logotype" />
      <a href="https://github.com/gebo96" target="_blank">@german.schneck</a>
    </div>
    <nav id="nav">
      <router-link to="/">Tasks</router-link>
      <router-link to="/about">About me</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'navigator',
};
</script>

<style>
  header#app-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #f3f3f3;
    padding: 2vh;
  }

  div.title {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  div.title > img {
    width: 22px;
    margin-right: 2vh;
  }

  div.title > a {
    font-size: 14px;
    text-decoration: none;
    color: #248e56;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
    margin-left: 2vh;
    text-transform: uppercase;
    font-size: 12px;
    text-decoration: none;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
</style>
