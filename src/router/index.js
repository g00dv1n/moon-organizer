import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/Main'
import Day from '../components/Day'
import Profile from '../components/personal/Profile'
import Reviews from '../components/Reviews.vue'
import store from '../store'
import Calc from '../components/personal/Calc.vue'
import { TodoList } from '../components/personal/todo-list'
import { TodoMy } from '../components/personal/todo-my'
import { LunarBirthday } from '../components/personal/lunar-birthday'
import { ZodiacBirthday } from '../components/personal/zodiac-birthday'

Vue.use(Router)

const checkRigths = (to, from, next) => {
  if (store.state.authorized === false) {
    router.replace({name: 'default'})
  } else {
    next()
  }
}

const router = new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'default',
      component: Main
    },
    {
      path: '/lunar-day/:dayNumber',
      name: 'lunar-day',
      component: Day,
      props: true
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
      path: '/me/calc',
      name: 'calc',
      component: Calc,
      beforeEnter: checkRigths
    },
    {
      path: '/me/todo-list',
      name: 'todo-list',
      component: TodoList,
      beforeEnter: checkRigths
    },
    {
      path: '/me/todo-my',
      name: 'todo-my',
      component: TodoMy,
      props: true,
      beforeEnter: checkRigths
    },
    {
      path: '/me/lunar-birthday',
      name: 'lunar-birthday',
      component: LunarBirthday,
      props: true,
      beforeEnter: checkRigths
    },
    {
      path: '/me/zodiac-birthday',
      name: 'zodiac-birthday',
      component: ZodiacBirthday,
      props: true,
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

