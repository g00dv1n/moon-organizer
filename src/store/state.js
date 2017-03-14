/**
 * Created by g00dv1n on 01.03.17.
 */
import calendarTypes from 'lang/calendar-types'
import constants from 'lang/constants'
import { getAllLocales } from 'helpers/locales'

const state = {
  calendarTypes,
  constants,
  locale: '',
  LOCALES: getAllLocales(),
  currentType: 'default',
  geo: null
}

export default state
