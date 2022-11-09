<template lang="pug">
  .hello
    img.logo(src="../assets/logo.png")
    h2 {{msg}}
    .ui.segment
      p
        | 部件化的前端框架
        br
        | 結合了
        br
        | Angular般的寫法 + React般的引擎
        br
        br
        | 學習曲線平緩
        | 可快速上手，並保有將作品放大規模的潛能
        br
        br
        | 相容: JSX、TypeScript語言與Webpack環境
        br
        br
        router-link(to="/start") 瞭解更多

</template>

<script>
export default {
  name: 'HomeHome',
  data () {
    return {
      msg: 'Vue是什麼?'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
p {
  font-size: 0.8rem;
}
</style>
