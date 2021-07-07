import Vue from 'vue'
import Router from 'vue-router'
import Rsp from '@/components/Rsp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Rsp',
      component: Rsp
    }
  ]
})
