import Vue from 'vue'
import Router from 'vue-router'
import Main from 'components/Main'
import Day from 'components/Day'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/day',
      name: 'day',
      component: Day
    }
  ]
})
