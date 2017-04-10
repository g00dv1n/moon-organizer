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
  currentType: 'default',
  lastClickedDay: null,
  lastClickedLunarNumber: null,
  token: null,
  user: null,
  authorized: false,
  geo: {},
  config: Object.assign({}, config),
  LOCALES: getAllLocales(),
  axios: axios.create({baseURL: config.API_ROOT}),
  storageToken: {
    get  () {
      return localStorage.getItem(TOKEN)
    },
    set (token) {
      localStorage.setItem(TOKEN, token)
    }
  }
  /* get storageToken () {
   return localStorage.getItem(TOKEN)
   },
   set storageToken (token) {
   localStorage.setItem(TOKEN, token)
   } */
}

export default state
