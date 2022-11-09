<template lang="pug">
  .hi
    .right.bar
      .door(:style="{bottom:countBar(list,m)*10+'%'}")
</template>

<script>
export default {
  name: 'MeMe',
  props: ['m', 'list'],
  data () {
    return {
      // ...
    }
  },
  methods: {
    countBar: function (list, m) {
      var num = list.filter(function (o) {
        return o.checked
      }).length
      return num * m
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.right.bar {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  //right: 0;
  bottom: 0;
  width: 10px;
  width: 1vmax;
  border-right: 1px solid green;
  background-color: green;
  background-image: linear-gradient(red, yellow, green);
}

.right.bar .door {
  position: fixed;
  z-index: 9999;
  top: 0;
  background-color: white;
  width: 10px;
  width: 1vmax;
  border-top: 1px solid green;
  border-right: 1px solid green;
  border-radius: 0 0 3px 3px;
  transition: bottom 0.5s ease;
}

</style>
