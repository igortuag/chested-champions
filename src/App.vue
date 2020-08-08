<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Início</router-link> |
      <router-link to="/about">Sobre</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
/*
* Base
*/
@import '@/assets/sass/base/_fonts.scss';

#app {
  font-family: Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  font-size: 28px;
  padding: 15px;

  a {
    font-weight: bold;
    color: #010101;

    &.router-link-exact-active {
      color: #266780;
    }
  }
}
</style>
