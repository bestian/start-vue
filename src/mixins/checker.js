export default {
  methods: {
    checkedFirst: function (list) {
      var ft = list.filter((o) => { return o.checked })
      if (!ft[0]) {
        return list
      } else {
        return ft
      }
    },
    checkP: function (p, it) {
      it = it.map(function (o) {
        o.checked = false
        if (o.p && o.p.indexOf(p) > -1) o.checked = true
        return o
      })
    },
    countAll: function (it, n) {
      var num = it.filter(function (o) {
        return o.checked
      }).length
      return n ? num > n : num
    },
    countAdv: function (n, m) {
      var num = this.advs.filter(function (o) {
        return o.checked
      }).length * 1
      return n ? num > n : num
    }
  }
}
