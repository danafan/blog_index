import Vue from 'vue'
import Router from 'vue-router'

const navbar = resolve=>System.import('@/components/navbar')
const index = resolve=>System.import('@/components/index')
const sharing = resolve=>System.import('@/components/sharing')
const note = resolve=>System.import('@/components/note')
const log = resolve=>System.import('@/components/log')
const detail = resolve=>System.import('@/components/detail')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: navbar,
      children:[
      { path: '/index', component: index},
      { path: '/sharing', component: sharing},
      { path: '/note', component: note},
      { path: '/log', component: log},
      { path: '/detail', component: detail},
    ]
    }
  ]
})
