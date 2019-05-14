<template>
  <div id="header">
    <div id="logo">
      <a id="logoPc" href="/">
        <img src="../../assets/logo_square_blue.jpg" />
      </a>
      <a id="logoSp" href="/">
        <img src="../../assets/logo_rectangle_blue.jpg" />
      </a>
    </div>
    <nav id="navPc">
      <ul>
        <li v-for="(item, index) in items" :key="index">
          <router-link v-bind:to="item.path" exact>
            {{ item.mainTitle }}
            <small class="subTitle" lang="en">{{ item.subTitle }}</small>
          </router-link>
        </li>
      </ul>
    </nav>
    <Slide id="navSp" right noOverlay>
      <router-link
        v-for="(item, index) in items"
        :key="index"
        v-bind:to="item.path"
        exact
      >
        {{ item.mainTitle }}
      </router-link>
    </Slide>
  </div>
</template>

<script>
import { Slide } from 'vue-burger-menu'

export default {
  name: 'HeaderMenu',
  components: {
    Slide,
  },
  data() {
    return {
      items: [
        { mainTitle: 'ホーム', subTitle: 'HOME', path: '/' },
        { mainTitle: '企業情報', subTitle: 'COMPANY', path: '/company' },
        { mainTitle: '事業紹介', subTitle: 'BUSINESS', path: '/business' },
        { mainTitle: 'お問い合わせ', subTitle: 'CONTACT', path: '/contact' },
      ],
    }
  },
}
</script>

<style scoped>
#header {
  position: fixed;
  height: 60px;
  width: 100%;
  top: 0;
  text-align: center;
  background-color: #ffffffe0;
  z-index: 100;
}

#navPc {
  width: 600px;
  margin-left: auto;
  font-size: 16px;
  font-weight: bold;
  display: none;
}

#navSp {
  display: block;
}

#logoPc {
  display: none;
}

#logoSp {
  display: block;
}

#logo #logoPc img {
  height: 125px;
}

#logo #logoSp img {
  position: absolute;
  height: 50px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}

@media (min-width: 800px) {
  #header {
    position: relative;
    height: 125px;
    width: auto;
    margin: 16px;
    background-color: transparent;
  }

  #navPc {
    display: block;
  }

  #navSp {
    display: none;
  }

  #logo {
    position: absolute;
  }

  #logoPc {
    display: block;
  }

  #logoSp {
    display: none;
  }
}

@media (min-width: 1000px) {
  #header {
    max-width: 1000px;
    margin: 16px auto;
  }
}

#navPc ul {
  height: 125px;
  margin-right: 16px;
  padding: 0;
  display: flex;
  justify-content: flex-end;
  list-style: none;
}

#navPc ul li {
  position: relative;
  width: 100px;
  height: 50px;
  margin: auto 10px 0 10px;
}

#navPc ul li a {
  position: absolute;
  left: 0;
  width: 100%;
  color: #575757;
  text-decoration: none;
}

#navPc ul li a::after {
  position: absolute;
  bottom: -5px;
  left: 0;
  content: '';
  width: 100%;
  height: 2px;
  background: #0067fe;
  transform: scale(0, 1);
  transform-origin: center top;
  transition: transform 0.3s;
}

#navPc ul li a:hover::after {
  transform: scale(1, 1);
}

#navPc ul li a:hover {
  color: #0067fe;
  transition: all 500ms ease;
}

#navPc .subTitle {
  display: block;
  font-size: 11px;
}

#navPc .router-link-active {
  color: #0067fe;
}

#navPc .router-link-active::after {
  position: absolute;
  bottom: -5px;
  left: 0;
  content: '';
  width: 100%;
  height: 2px;
  background: #0067fe;
  transform: scale(1, 1);
}
</style>

<style>
#navSp .bm-burger-button {
  top: 15px;
}

#navSp .bm-burger-bars {
  background-color: #7f7f7f;
}

#navSp .bm-menu {
  background-color: #0067fe;
}

#navSp .bm-item-list a {
  font-size: 16px;
  font-weight: bold;
  color: white;
  text-decoration: none;
  white-space: nowrap;
}

#navSp .bm-cross {
  background: white;
}
</style>
