import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import second from '@/components/second.vue'
import result from '@/components/result.vue'
import jiang from '@/components/jiang.vue'
import card from '@/components/card.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/second/:id',
      name: 'Second',
      component: second
    },
     {
      path: '/result',
      name: 'Result',
      component: result
    },
     {
      path: '/jiang',
      name: 'Jiang',
      component: jiang
    },
    {
      path: '/card',
      name: 'card',
      component: card
    },
  ]
})
