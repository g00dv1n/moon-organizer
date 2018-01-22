import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/Main.vue'
import Day from '../components/Day.vue'
import Profile from '../components/personal/Profile.vue'
import Reviews from '../components/Reviews.vue'
// import store from '../store'
import Calc from '../components/personal/Calc.vue'
import { TodoList } from '../components/personal/todo-list'
import { TodoMy } from '../components/personal/todo-my'
import { LunarBirthday } from '../components/personal/lunar-birthday'
import { ZodiacBirthday } from '../components/personal/zodiac-birthday'
import { Biorhythms } from '../components/personal/biorhythms'
import { PromoPage } from '../components/promo-page'
import { Registration } from '../components/registration'
import { ThankyouPage } from '../components/thankyou-page'
import { PromoCalc, PromoTodo } from '../components/promo-specific'

import {checkRigths, setCategory} from './hooks'

Vue.use(Router)

/* const checkRigths = (to, from, next) => {
  if (store.state.authorized === false) {
    router.replace({name: 'default'})
  } else {
    next()
  }
} */

const forceScrollTop = (to, from, next) => {
  document.body.scrollTop = 0
  next()
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
      component: Main,
      beforeEnter: setCategory
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
      component: Calc
      // beforeEnter: checkRigths
    },
    {
      path: '/me/todo-list',
      name: 'todo-list',
      component: TodoList
      // beforeEnter: checkRigths
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
      path: '/me/biorhythms',
      name: 'biorhythms',
      component: Biorhythms,
      props: true
      // beforeEnter: checkRigths
    },
    {
      path: '/reviews/show',
      name: 'reviews',
      component: Reviews
    },
    {
      path: '/promo/about',
      name: 'promo-page',
      component: PromoPage,
      beforeEnter: forceScrollTop
    },

    {
      path: '/promo/calc',
      name: 'promo-calc',
      component: PromoCalc
    },
    {
      path: '/promo/todo',
      name: 'promo-todo',
      component: PromoTodo
    },
    {
      path: '/me/registration',
      name: 'registration',
      component: Registration
    },
    {
      path: '/me/thank-you',
      name: 'thankyou-page',
      component: ThankyouPage
    }
  ]
})

export default router

