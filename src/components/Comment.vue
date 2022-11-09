<template lang="pug">
  .c
    .ui.container
      form.ui.comment.form
        textarea(rows="3", v-model="newText", placeholder="留下您的想法...", @keyup.enter="submit($event, newText)")
        .ui.blue.labeled.submit.icon.fluid.button(@click="submit($event, newText)")
          i.icon.edit
          |  留言
      .ui.comments
        h3.ui.dividing.header 留言板
        .comment(v-for="(a, $idx) in reverse(anArray)")
          a.avatar
            img(src='../../static/bear.png')
          .content
            a.author {{a.name}}
            .metadata
              span.date {{a.time | timestamp}}
            .text {{a.text}}
            .actions
              a.reply(@click="ed = $idx") 回覆
              a.delete(@click="removeComment(a['.key'])") 刪除

          .comments(v-if="a.reply")
            .comment(v-for="r in a.reply")
              a.avatar
                img(src='../../static/rabbit.png')
              .content
                a.author {{r.name}}
                .metadata
                  span.date {{r.time | timestamp}}
                .text {{r.text}}
                .actions
                  a.reply(@click="ed = $idx") 回覆
                  a.delete.disabled(@click="removeReply()") 刪除

          form.ui.reply.form(v-show="ed == $idx")
            textarea(rows="2", v-model="myReply", placeholder="留下您的想法...", @keyup.enter="reply($event, a['.key'], a, myReply)")
            .ui.green.labeled.submit.icon.fluid.button(@click="reply($event, a['.key'], a, myReply)")
              i.reply.icon
              | 回覆: {{myReply}}
</template>

<script>
import firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyBD-vU6kY8qBdae1ANFCt312yiHBzcbCoI',
  authDomain: 'start-vue.firebaseapp.com',
  databaseURL: 'https://start-vue.firebaseio.com',
  storageBucket: '',
  messagingSenderId: '1094423879350'
}

var db = firebase.initializeApp(config).database()

export default {
  name: 'CommentCom',
  firebase: {
    anArray: db.ref('test-comments').limitToLast(25)
  },
  data () {
    return {
      newText: '',
      ed: -1,
      myReply: ''
      // ...
    }
  },
  methods: {
    reverse (list) {
      var ans = []
      for (var i = list.length - 1; i >= 0; i--) {
        ans.push(list[i])
      }
      // console.log(ans)
      return ans
    },
    submit (e, txt, name) {
      console.log(e)
      if (e.shiftKey) {
        console.log('換行')
        return
      }
      this.$firebaseRefs.anArray.push({
        name: name || '匿名人士',
        text: txt,
        time: (new Date()).getTime()
      })
      this.newText = ''
    },
    removeComment (key) {
      if (window.confirm('確定要刪除嗎? 這動作不能回復')) {
        this.$firebaseRefs.anArray.child(key).remove()
      }
    },
    reply (e, key, item, txt) {
      if (e.shiftKey) {
        console.log('換行')
        return
      }
      var cd = this.$firebaseRefs.anArray.child(key)
      var o = {
        name: '匿名人士',
        text: txt,
        time: (new Date()).getTime()
      }
      var mirror = {}
      var ks = ['name', 'text', 'time', 'reply']
      for (var i = ks.length - 1; i >= 0; i--) {
        mirror[ks[i]] = item[ks[i]]
      }
      mirror.reply = mirror.reply || []
      mirror.reply.push(o)

      cd.set(mirror)
      this.myReply = ''
      this.ed = -1
    },
    removeReply (keyA, keyR) {
      // ...
    }
    // ...
  }
}
</script>
<style lang="scss" scoped>

.c {
  text-align: left;
  font-size: 0.8rem !important;
}

.text {
  white-space: pre;
}

.reply {
  textarea {
    max-height: 4em
  }
  .button {
    font-size: 0.7em
  }
}

</style>
