<template lang="pug">
  .start
    measure(:list="advs", :m="1")
    h1 {{ msg }}
    //p.gray(v-for="(m, $idx) in ms", v-if="p.p==$idx") {{m}}
    p.choice
      span(v-for="(t, $index) in ['歸零','','','','工程師','設計師','黑客']", v-if ="t")
        input(type="radio", name="p", :value="$index", v-model="p.p", @change="checkP(p.p, advs)")
        | {{t}}
    transition-group.ui.list(name="list", tag = "div")
      span.item(v-for="(i, $idx) in checkedFirst(advs)", :key="i.t", :class="{active: i.checked}")
        .ui.divider(v-if="$idx % 5 == 0")
        input.ui.checkbox(type="checkbox", v-model="i.checked", @change="p.p = -1")
        a(v-if="i.h", :href="i.h", target="_blank") {{i.t}}
          span.gray(v-if="i.note") &nbsp;({{i.note}})
          i.chevron.right.icon(v-show="i.checked")
        span(v-else) {{i.t}}
          span.gray(v-if="i.note") &nbsp;({{i.note}})
    .ui.divider
    p(:class="{red:countAll(advs, 8)}") 預計{{countAll(advs)}}小時
      span(v-if="countAll(advs, 8)") !(超過一天了)
</template>

<script>
import measure from './measure'
import checker from '../mixins/checker.js'

export default {
  name: 'DigDig',
  props: ['advs', 'p'],
  mixins: [checker],
  components: {
    measure
  },
  data () {
    return {
      msg: '今天你要鑽研什麼？',
      ms: ['需要html+css+js的先備知識', '需要html+css+js的先備知識', '需要進階的js知識', '需要進階的css知識']
    }
  },
  methods: {
    // ...
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../sass/start.scss';

</style>
