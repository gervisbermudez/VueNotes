import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/new',
      name: 'new',
      component: () => import('./views/NewNote.vue')
    },
    {
      path: '/noteview/:id',
      name: 'noteview',
      component: () => import('./views/ReadNote.vue'),
      props: true,
    }
  ]
})
