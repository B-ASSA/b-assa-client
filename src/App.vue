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
  font-family: 'ヒラギノ角ゴ Pro W3', 'Hiragino Kaku Gothic Pro', '游ゴシック体',
    'メイリオ', Meiryo, 'Yu Gothic', YuGothic, 'Oswald', 'ＭＳ Ｐゴシック',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app :lang(en) {
  font-family: Arial, Helvetica, 'sans-serif';
}
</style>
