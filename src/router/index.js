import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Start from '@/components/Start'
import Dig from '../components/Dig'
import Basic from '../components/more/Basic'
import Community from '../components/more/Community'
// import Comment from '../components/Comment'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/start',
      name: 'Start',
      component: Start
    },
    {
      path: '/dig',
      name: 'Dig',
      component: Dig
    },
    {
      path: '/more/basic',
      name: 'Basic',
      component: Basic
    },
    {
      path: '/more/community',
      name: 'Community',
      component: Community
    }
  //  { path: '/comment',
  //    name: 'Comment',
  //    component: Comment }
  ]
})
