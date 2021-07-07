import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/page/Index'
import Score from '@/components/Score'
import Circle from '@/components/Circle'
import Todo from '@/components/page/Todo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/score',
      name: 'Score',
      component: Score
    },
    {
      path: '/circle',
      name: 'Circle',
      component: Circle
    },
    {
      path: '/todo',
      name: 'Todo',
      component: Todo
    }
  ]
})
