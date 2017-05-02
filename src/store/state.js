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
  notFirstTime: localStorage.getItem('NOT_FIRST_TIME') || 'no',
  LOCALES: getAllLocales(),
  currentType: 'default',
  lastClickedDay: null,
  lastClickedLunarNumber: null,
  today: null,
  modal: null,
  geo: {}
}

export default state
