<template>
  <div id="header">
    <div id="logo">
      <!-- <img src="../assets/logo.png" /> -->
      <div class="logo-test">
        <small lang="en">logo<br />sample</small>
      </div>
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
  </div>
</template>

<script>
export default {
  name: 'HeaderMenu',
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
  height: 125px;
  margin-top: 0px;
  margin-bottom: 16px;
  text-align: center;
}

#navPc {
  width: 600px;
  margin-left: auto;
  font-size: 16px;
  font-weight: bold;
}

#navPc ul {
  height: 125px;
  margin-top: auto;
  margin-right: 16px;
  padding: 0%;
  display: flex;
  justify-content: flex-end;
  list-style: none;
}

#navPc ul li {
  width: 100px;
  height: 50px;
  margin-top: auto;
  margin-left: 10px;
  margin-right: 10px;
  position: relative;
}

#navPc ul li a {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  color: #575757;
  text-decoration: none;
}

#navPc ul li a::after {
  position: absolute;
  bottom: -4px;
  left: 0;
  content: '';
  width: 100%;
  height: 2px;
  background: #0075c2;
  transform: scale(0, 1);
  transform-origin: center top;
  transition: transform 0.3s;
}

#navPc ul li a:hover::after {
  transform: scale(1, 1);
}

#navPc ul li a:hover {
  color: #0075c2;
  transition: all 500ms ease;
}

#navPc .subTitle {
  display: block;
  font-size: 11px;
}

#navPc .router-link-active {
  color: #0075c2;
}

#navPc .router-link-active::after {
  position: absolute;
  bottom: -4px;
  left: 0;
  content: '';
  width: 100%;
  height: 2px;
  background: #0075c2;
  transform: scale(1, 1);
}

#logo {
  max-width: 184px;
  position: absolute;
  top: 16px;
  left: 16px;
  z-index: 3000;
}

#logo img {
  max-width: 125px;
}

#logo .logo-test {
  display: table-cell;
  vertical-align: middle;
  width: 125px;
  height: 125px;
  background: #2976f2;
  color: white;
  font-size: 30px;
  font-weight: bold;
}
</style>
