// @flow

import { getLocaleFromCode } from '../helpers/locales'

const SET_LOCALE = 'SET_LOCALE'
const SET_CURRENT_TYPE = 'SET_CURRENT_TYPE'
const SET_CLIENT_GEO = 'SET_CLIENT_GEO'
const SET_LAST_CLICKED_DAY = 'SET_LAST_CLICKED_DAY'
const SET_LAST_CLICKED_LUNAR_NUMBER = 'SET_LAST_CLICKED_LUNAR_NUMBER'
const SET_NOT_FIRST_TIME = 'SET_NOT_FIRST_TIME'

const mutations = {
  [SET_LOCALE]: (state: Object, locale: string): void => {
    state.locale = locale
  },
  [SET_CURRENT_TYPE]: (state: Object, type: string): void => {
    state.currentType = type
  },
  [SET_CLIENT_GEO]: (state: Object, geo: GeoData): void => {
    state.geo = Object.assign({}, geo)
    state.geo.latitude = parseFloat(state.geo.loc.split(',')[0])
    state.geo.longitude = parseFloat(state.geo.loc.split(',')[1])
    state.locale = getLocaleFromCode(state.geo.country)
  },
  [SET_LAST_CLICKED_DAY]: (state: Object, day: Day): void => {
    // clone day to lastClickedDay
    state.lastClickedDay = {...day}
  },
  [SET_LAST_CLICKED_LUNAR_NUMBER]: (state: Object, lunarDayNumber: number) => {
    state.lastClickedLunarNumber = lunarDayNumber
  },
  [SET_NOT_FIRST_TIME]: (state: Object, flag: string) => {
    state.notFirstTime = flag
    localStorage.setItem('notFirstTime', flag)
  }
}

export default mutations

