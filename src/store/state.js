// @flow

import calendarTypes from '../lang/calendarTypes'
import constants from '../lang/constants'
import { getAllLocales } from '../helpers/locales'
import router from '../router'

const state = {
  calendarTypes,
  constants,
  router,
  locale: 'ru',
  notFirstTime: localStorage.getItem('notFirstTime') || 'no',
  LOCALES: getAllLocales(),
  currentType: 'default',
  lastClickedDay: null,
  lastClickedLunarNumber: null,
  geo: {}
}

export default state
