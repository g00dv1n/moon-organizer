/**
 * Created by g00dv1n on 01.03.17.
 */
import calendarTypes from './calendar-types'
import { getAllLocales } from 'helpers/locales'

const state = {
  calendarTypes,
  locale: '',
  LOCALES: getAllLocales(),
  currentType: 'default',
  geo: null
}

export default state
