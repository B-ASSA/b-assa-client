<template>
  <div id="footer">
    <ul class="footer-nav">
      <li v-for="(item, index) in items" :key="index">
        <router-link v-bind:to="item.path">
          {{ item.mainTitle }}
        </router-link>
      </li>
    </ul>
    <div class="copyright" lang="en">
      &copy;2009 - {{ date }} <strong>B-ASSA, Inc.</strong>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterMenu',
  data() {
    return {
      items: [
        { mainTitle: 'サイトマップ', path: '/' },
        { mainTitle: 'プライバシーポリシー', path: '/' },
        { mainTitle: 'サイトご利用規約', path: '/' },
      ],
      date: new Date().getFullYear(),
    }
  },
}
</script>

<style scoped>
#footer {
  height: 100px;
  border-top: 1px solid #eee;
  text-align: center;
}

.footer-nav {
  line-height: 20px;
  padding: 20px;
  margin: auto;
  display: flex;
  justify-content: center;
  list-style: none;
}

.footer-nav li {
  font-size: 16px;
  font-weight: bold;
  padding-left: 10px;
  padding-right: 10px;
}

.footer-nav li + li {
  border-left: 1px solid #eee;
}

.footer-nav li a {
  color: #575757;
  text-decoration: none;
}

.copyright {
  line-height: 30px;
  color: white;
  background-color: #2976f2;
}
</style>
