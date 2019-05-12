<template>
  <div id="app">
    <header-menu />
    <router-view id="wrapper" />
    <footer-menu />
  </div>
</template>

<script>
import Vue from 'vue'
import vueSmoothScroll from 'vue-smooth-scroll'
import HeaderMenu from '@/components/modules/HeaderMenu'
import FooterMenu from '@/components/modules/FooterMenu'

Vue.use(vueSmoothScroll)

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
  color: #4d4d4d;
}

#app :lang(en) {
  font-family: Arial, Helvetica, 'sans-serif';
}

@media (min-width: 1000px) {
  #wrapper {
    max-width: 1000px;
    margin: auto;
    margin-top: 16px;
    margin-bottom: 16px;
  }
}

@media (max-width: 1000px) {
  #wrapper {
    width: auto;
    margin: 16px;
  }
}

.wrapper-heading {
  position: relative;
  width: 100%;
  display: block;
  margin: 35px 0;
  padding: 10px 0;
  line-height: 34px;
  border: 1px solid #eee;
  font-size: 22px;
  text-align: center;
}
</style>
