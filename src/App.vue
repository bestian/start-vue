<template lang="pug">
#app
  sin
  nav.ui.four.item.menu
    router-link.item(to='/', exact='')
      img.small(src='./assets/logo.png')
    router-link.item(to='/start', exact='') 一日上手
    .ui.simple.dropdown.item
      | 其他
      i.dropdown.icon
      .menu
        router-link.item(to='/dig') 鑽研
        router-link.item(to='/more/basic') 從頭開始
        router-link.item(to='/more/community') 社群
        //.divider
        //router-link.item(to='/comment') 留言板
        .divider
        .gray.header 關於本站
        a.item(href='https://github.com/bestian/start-vue', target="_blank")
          | 專案頁
          i.github.icon
        a.item(href='https://github.com/bestian/start-vue/issues', target="_blank")
          | 錯誤回報
          i.github.icon
  #main
    transition(name='fade', mode='out-in')
      router-view(:items='items', :advs='advs', :p='p')
</template>

<script>

import sin from './components/sin'
import items from './data/start.js'
import advs from './data/dig.js'

export default {
  name: 'App',
  components: {
    sin
  },
  data: function () {
    return {
      p: { p: 0 },
      items: items,
      advs: advs
    }
  },
  methods: {
    test: function () {
      this.$router.push('/dig')
    }
  }
}
</script>

<style lang="scss">

@import './sass/start.scss';

html {
  height: 100%;
  font-size: 18px;
  font-size: 3vm;
  font-size: 3vmin;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.ui.container {
  max-width: 600px !important;
}

#app {
  color: #2c3e50;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  font-size: 1rem;
  text-align: center;
}

#app a, #app nav .ui.dropdown.simple.item {
  color: #42b983;
  text-decoration: none;
  &.disabled {
    color: gray;
    cursor: not-allowed;
  }
}

.logo {
  width: 100px;
  height: 100px;
}

#main {
  position: absolute;
  top: 150px;
  left: 0;
  width: 100%;
}

#app nav {
  position: fixed;
  z-index: 5;
  margin: 0;
  top:0;
  left:0;
  a {
    @include transition(all 0.5s ease);
    &.router-link-active {
      background-color: #ccf !important;
    }
  }
}

.ui.simple.dropdown .menu {
  @include transition(opacity 1s ease);
}

.gray {
  color: gray !important;
  font-size: 0.618em;
}

.fade-leave {  }

.fade-leave-active {
  @include transition(all .3s ease);
  opacity: 0;
}

.fade-enter {
  opacity: 0;
  @include transform(rotateY(45deg));
}

.fade-enter-active {
  @include transition(all .5s ease-in);
}
</style>
