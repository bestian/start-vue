<template lang="pug">
  .basic
    h1 {{ msg }}
    .ui.container
      .ui.segment
        p 起初，在瀏覽器端只有HTML，再來有了CSS，但還不能跑更複雜的程式。

        p 接著，有了
          a(href = "https://zh.wikipedia.org/zh-tw/JavaScript") JavaScript(1995~)
          | 但很慢。
        p 當
          a(href = "https://zh.wikipedia.org/zh-tw/JavaScript") JS
          | 變快後，各種功能開始往前端移動，節省後端的運算量。
        .ui.divider

        p 接著，
          a(href="https://zh.wikipedia.org/zh-tw/JQuery") jQuery(2006~)
          | 來了。它讓JS操作簡化，強調「寫更少，做更多」一度主導了泛用函式庫的生態，據
          a(href="https://zh.wikipedia.org/wiki/JQuery") 維基百科
          | ，全球前10,000個存取最高的網站中，有65%網站都用了
          a(href="https://zh.wikipedia.org/zh-tw/JQuery") jQuery
          |。
        p 但故事還沒有結束。
        .ui.divider

        p 框架(framework)的概念也在前端出現了，框架們試圖處理超過
          a(href="https://zh.wikipedia.org/zh-tw/JQuery") jQuery
          | 所做的事。

        p 它們給設計師預設了架構與規格，用很少力氣達成常見的工作，並且讓往上蓋大時，程式還能保有結構，使理解、維護、交接更容易。

        p 不同框架有不同的規格，背後的引擎不同，表面上設計師寫的語法也很不一樣。一個寫慣Backbone(2010~)的設計師可能對Ember(2011~)很陌生，反之亦然。

        p 框架很多樣，有前端框架如Angular(2009~)、Knockout(2010~)、Polymer(2013~)；後端框架如Django(2005~)、Ruby On Rails(2005)、Sails(2012)、Meteor(2012~)等等，各有範圍與特色。

        p 因應手機的普及，也有如PhoneGap、jQuery Mobile、Cordova和Ionic這些工具出現。

        .ui.divider

        p 其中，Angular這個框架一度造成震撼性的效果。因其資料綁定、相依性嵌入等特性，讓書寫方便的同時，也讓建立與分享模組很方便。

        p 大量的Angular模組被研發出來，在
          a(href="http://ngmodules.org/") ngmodules.org/
          | 平台有超過2000個隨插即用的Angular模組。

        p 其實
          a(href = "https://www.emberaddons.com/") www.emberaddons.com
          | 上也有超過3000個模組，Angular不是唯一有大量社群動能的框架。

        p 不過，Angular的語法是很特出的創舉。它看起來就像把書寫HTML的過程變得更豐富，而不是要重新學習許多新的語法與字句。

        .ui.divider

        p 隨後，
          a(href = "https://facebook.github.io/react/") React(2013~)
          | 開啟了使用虛擬DOM以提高執行效能的時代，隨後其他的框架也陸續使用虛擬DOM引擎，Vue也不例外。畢竟JS運算比瀏覽器的DOM插拔來得快多了。

        p
          | 除了虛擬DOM，網路部件化的流行，也和React有關，在之後的Angular2與Vue，都採取網路部件化的結構。
          a(href = "https://angular.io/") Angular2(2014~)
          | 放棄了Angular1的控制器(controller)與範圍(scope)，改以部件(component)為單位。

        p
          | 部件的特色在於各部件都可以有完整的模板(template)、資料(data)、 方法(methods)與限定範圍的樣式(scoped css)。部件之間可以形成樹狀結構，也可以彼此溝通。

        p
          | 透過部件相互組織而成的結構，設計師比以往更容易落實「關注點分離」，每次只改要改的部份，不必擔心牽一髮動全身。
</template>

<script>
export default {
  name: 'BasicBasic',
  data () {
    return {
      msg: '從頭開始'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped>

h1, h3 {
  color: #42b983;
}

p {
  font-size: 0.85rem;
  text-align: left;
  line-height: 160%;
  margin-bottom: 1em;
}

.ui.bulleted.list {
  font-size: 0.75rem;
  text-align: left;
  margin-left: auto;
  margin-right: auto;
}

</style>
