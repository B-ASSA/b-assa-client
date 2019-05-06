<template>
  <div id="app">
    <header-menu />
    <router-view id="wrapper" />
    <footer-menu />
  </div>
</template>

<script>
import HeaderMenu from '@/components/HeaderMenu'
import FooterMenu from '@/components/FooterMenu'

export default {
  name: 'App',
  components: {
    HeaderMenu,
    FooterMenu,
  },
}
</script>

<style>
body {
  margin: auto;
}

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

#wrapper {
  max-width: 1000px;
  margin: auto;
  margin-top: 16px;
  margin-bottom: 16px;
}
</style>
