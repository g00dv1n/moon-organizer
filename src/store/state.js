// @flow

import calendarTypes from '../lang/calendarTypes'
import constants from '../lang/constants'
import { getAllLocales } from '../helpers/locales'
import router from '../router'
import config from '../config'
import axios from 'axios'

const TOKEN = 'TOKEN'

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
  geo: {},
  token: null,
  user: null,
  authorized: false,
  config: Object.assign({}, config),
  axios: axios.create({baseURL: config.API_ROOT}),
  storageToken: {
    get  () {
      return localStorage.getItem(TOKEN)
    },
    set (token) {
      localStorage.setItem(TOKEN, token)
    }
  }

}

export default state
