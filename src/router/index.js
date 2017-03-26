// @flow

import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/Main'
import Day from '../components/Day'
import store from '../store'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'default',
      component: Main
    },
    {
      path: '/lunar-day/:dayNumber',
      name: 'lunar-day',
      component: Day
    },
    {
      path: '/calendar/:category',
      name: 'category-calendar',
      component: Main
    }
  ]
})

router.beforeEach((to, from, next) => {
  store.dispatch('updateType', to.params.category)
  next()
})

export default router

