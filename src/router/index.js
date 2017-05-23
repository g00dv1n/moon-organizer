import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/Main'
import Day from '../components/Day'
import Profile from '../components/personal/Profile'
import Reviews from '../components/Reviews.vue'
import store from '../store'

Vue.use(Router)

const checkRigths = (to, from, next) => {
  if (store.state.authorized === false) {
    router.replace({name: 'default'})
  } else {
    next()
  }
}

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
      path: '/me/profile',
      name: 'profile',
      component: Profile,
      beforeEnter: checkRigths
    },
    {
      path: '/reviews/show',
      name: 'reviews',
      component: Reviews
    }
  ]
})

// update type
router.beforeEach((to, from, next) => {
  store.dispatch('updateType', to.params.category)
  next()
})

export default router

