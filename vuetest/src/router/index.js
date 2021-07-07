import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Modal from '@/components/Modal'
import List from '@/components/List'
import Todolist from '@/components/Todolist'
import Welaaa from '@/components/Welaaa'
import Myrealtrip from '@/components/Myrealtrip'
import Hotelscombined from '@/components/Hotelscombined'
import Itech from '@/components/Itech'
import Message from '@/components/Message'
import Todo from '@/components/Todo'
import Join from '@/components/Join'
import Login from '@/components/Login'
import Data from '@/components/Data'
import Syntax from '@/components/Syntax'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/modal',
      name: 'Modal',
      component: Modal
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/todolist',
      name: 'Todolist',
      component: Todolist
    },
    {
      path: '/welaaa',
      name: 'Welaaa',
      component: Welaaa
    },
    {
      path: '/myrealtrip',
      name: 'Myrealtrip',
      component: Myrealtrip
    },
    {
      path: '/hotelscombined',
      name: 'Hotelscombined',
      component: Hotelscombined
    },
    {
      path: '/itech',
      name: 'Itech',
      component: Itech
    },
    {
      path: '/message',
      name: 'Message',
      component: Message
    },
    {
      path: '/todo',
      name: 'Todo',
      component: Todo
    },
    {
      path: '/join',
      name: 'Join',
      component: Join
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/data',
      name: 'Data',
      component: Data
    },
    {
      path: '/syntax',
      name: 'Syntax',
      component: Syntax
    }
  ]
})
