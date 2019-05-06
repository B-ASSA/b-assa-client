<template>
  <div class="home">
    <carousel :data="slides" lang="en"></carousel>
  </div>
</template>

<script>
import Vue from 'vue'
import VueCarousel from '@chenfengyuan/vue-carousel'

Vue.component(VueCarousel.name, VueCarousel)

export default {
  data() {
    return {
      slides: [
        '<div class="carousel-slide">Slide 1</div>',
        '<div class="carousel-slide">Slide 2</div>',
        '<div class="carousel-slide">Slide 3</div>',
      ],
    }
  },
}
</script>

<style>
.carousel-slide {
  align-items: center;
  background-color: #666;
  color: #999;
  display: flex;
  font-size: 50px;
  justify-content: center;
  min-height: 25rem;
}
</style>
