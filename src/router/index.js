import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import goodlist from './../views/goodlist.vue'
import NotFound from './../views/NotFound.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'goodlist',
      component: goodlist
    },
    { path: '*', component: NotFound }// 全不匹配的情况下，返回404，路由按顺序从上到下，依次匹配。最后一个*能匹配全部
  ]
})
