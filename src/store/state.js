// @flow

import calendarTypes from '../lang/calendarTypes'
import constants from '../lang/constants'
import { getAllLocales } from '../helpers/locales'
import router from '../router'
import config from '../config'
import axios from 'axios'
import weekDays from '../weekdays/weekDaysInfo'

const state = {
  calendarTypes,
  constants,
  weekDays,
  router,
  locale: 'ru',
  notFirstTime: localStorage.getItem('NOT_FIRST_TIME') || 'no',
  isLeaveFeedback: '',
  token: '',
  LOCALES: getAllLocales(),
  currentType: 'default',
  lastClickedDay: null,
  today: null,
  geo: {},
  user: null,
  authorized: false,
  config: Object.assign({}, config),
  axios: axios.create({baseURL: config.API_ROOT})
}

Object.defineProperty(state, 'isLeaveFeedback', {
  get: () => {
    return localStorage.getItem('LEAVE_FEEDBACK_1') || 'no'
  },
  set: (flag) => {
    localStorage.setItem('LEAVE_FEEDBACK_1', flag)
  }
})

Object.defineProperty(state, 'token', {
  get: () => {
    return localStorage.getItem('TOKEN')
  },
  set: (token) => {
    localStorage.setItem('TOKEN', token)
    // set header
    state.axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  }
})

state.axios.interceptors.response.use((response) => {
  return response
}, (error) => {
  if (error.response.status) {
    delete state.axios.defaults.headers.common['Authorization']
    state.authorized = false
    state.token = ''
    state.user = null
  }
  return Promise.reject(error)
})

export default state
