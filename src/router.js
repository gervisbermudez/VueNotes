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
    path: '/view/:id',
    name: 'view',
    component: () => import('./views/ReadNote.vue'),
    props: true
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: () => import('./views/Edit.vue'),
    props: true
  }
  ]
})
