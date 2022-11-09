<template>
  <div>
    <div class="rhyme" v-for = "r in ar(200)" v-bind:key="r">
      <div class="dot"
        :style="{top: 50+Math.sin(r*3.14/200*2)*55+'vh',
                 left:r/2+'%',
                 color: color,
                 'z-index': countZ(r, -1)}">~
      </div>
      <div class="dot"
        :style="{top: 50-Math.sin(r*3.14/200*2)*55+'vh',
                 left:r/2+'%',
                 color: color,
                 'z-index': countZ(r, 1)}">_
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SinSin',
  props: {
    color: {
      type: String,
      required: false,
      defalt: 'green'
    }
  },
  data () {
    return {
      test: '...'
    }
  },
  methods: {
    ar (n) {
      var ans = []
      var i = 0
      while (i < n) {
        if (i < 70 || i > 130) {
          ans.push(i)
        }
        i++
      }
      return ans
    },
    countZ (r) {
      var z = 40 - Math.abs(r - 100)
      return z
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.rhyme {
  position: relative;
}
.dot {
  display: block;
  position: fixed;
  width: 2px;
  height: 4px;
  border: 1px solid;
  font-size: 9px;
}

</style>
