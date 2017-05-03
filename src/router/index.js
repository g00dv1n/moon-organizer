// @flow

import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/Main'
import Day from '../components/Day'
import Personal from '../components/Personal'
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
      path: '/:category',
      name: 'category-calendar',
      component: Main
    },
    {
      path: '/personal/me',
      name: 'personal',
      component: Personal
    }
  ]
})

router.beforeEach((to, from, next) => {
  store.dispatch('updateType', to.params.category)
  next()
})

export default router

