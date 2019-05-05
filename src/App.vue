<template>
  <div id="app">
    <header-menu />
    <router-view />
  </div>
</template>

<script>
import HeaderMenu from '@/components/HeaderMenu'

export default {
  name: 'App',
  components: {
    HeaderMenu,
  },
}
</script>

<style>
#app {
  font-family: Arial, Helvetica, 'sans-serif';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
