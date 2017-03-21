import Vue from 'vue'
import Router from 'vue-router'
import Main from 'components/Main'
import Day from 'components/Day'

Vue.use(Router)

export default new Router({
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
