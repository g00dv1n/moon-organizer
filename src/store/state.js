/**
 * Created by g00dv1n on 01.03.17.
 */
import calendarTypes from 'lang/calendarTypes'
import constants from 'lang/constants'
import { getAllLocales } from 'helpers/locales'
import router from 'router'

const state = {
  calendarTypes,
  constants,
  router,
  locale: '',
  LOCALES: getAllLocales(),
  currentType: 'default',
  lastClickedDay: null,
  geo: null
}

export default state
