<template lang="pug">
  .start
    measure(:list="items", :m="1")
    h1 {{ msg }}
    //p.gray(v-for="(m, $idx) in ms", v-if="p.p==$idx") {{m}}
    p.choice
      span(v-for="(t, $index) in ['歸零', '起始組合', '工程師', '設計師']")
        input(type="radio", name="p", :value="$index", v-model="p.p", @change="checkP(p.p, items)")
        | {{t}}
      span
        | &nbsp;&nbsp;&nbsp;
        router-link(to='/dig') 更深...
    transition-group.ui.list(name="list", tag = "div")
      span.item(v-for="(i, $idx) in checkedFirst(items)", :key="i.t", :class="{active: i.checked}")
        .ui.divider(v-if="$idx % 5 == 0")
        input.ui.checkbox(type="checkbox", v-model="i.checked", @change="p.p = -1")
        a(v-if="i.h", :href="i.h", target="_blank") {{i.t}}
          i.chevron.right.icon(v-show="i.checked")
        span(v-else) {{i.t}}
    .ui.divider
    p(:class="{red:countAll(items, 8)}") 預計{{countAll(items)}}小時
      span(v-if="countAll(items, 8)") !(超過一天了)

</template>

<script>
import measure from './measure'
import checker from '../mixins/checker.js'

export default {
  name: 'StartStart',
  props: ['items', 'p'], // , 'checkedFirst'
  mixins: [checker],
  components: {
    measure
  },
  data () {
    return {
      msg: '今天你要學什麼？',
      ms: ['需要html+css+js的先備知識', '需要html+css+js的先備知識', '需要進階的js知識', '需要進階的css知識']
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../sass/start.scss';

</style>
