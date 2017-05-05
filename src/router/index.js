// @flow

import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/Main'
import Day from '../components/Day'
import Personal from '../components/Personal'
import Reviews from '../components/Reviews.vue'
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
    },
    {
      path: '/reviews/show',
      name: 'reviews',
      component: Reviews
    }
  ]
})

router.beforeEach((to, from, next) => {
  store.dispatch('updateType', to.params.category)
  next()
})

export default router

