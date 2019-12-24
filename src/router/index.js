import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import goodlist from './../views/goodlist.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'goodlist',
      component: goodlist
    }
  ]
})
