<template lang="pug">
  .hi
    .ui.container
      h1 {{ msg }}
      h3.ui.dividing.header 國際社群
      .ui.bulleted.list
        a.item(href='https://vuejs.org/guide/join.html', target="_blank") 社群總匯(Vue Community)
        a.item(href='http://forum.vuejs.org/', target="_blank") 論壇問答區(Vue Forum)
        a.item(href='https://github.com/vuejs/awesome-vue', target="_blank") 資源與插件(Awesome Vue)
      h3.ui.dividing.header 台灣社群
      .ui.bulleted.list
        a.item(href='https://www.facebook.com/groups/vuejs.tw/?fref=ts', target="_blank") Vue.js 台灣
</template>

<script>
export default {
  name: 'CasicCasic',
  data () {
    return {
      msg: 'Vue社群'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped>
h1, h3 {
  color: #42b983
}
.ui.bulleted.list {
}
</style>
