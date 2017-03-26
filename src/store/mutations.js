// @flow

import { getLocaleFromCode } from '../helpers/locales'

const SET_LOCALE = 'SET_LOCALE'
const SET_CURRENT_TYPE = 'SET_CURRENT_TYPE'
const SET_CLIENT_GEO = 'SET_CLIENT_GEO'
const SET_LAST_CLICKED_DAY = 'SET_LAST_CLICKED_DAY'

const mutations = {
  [SET_LOCALE]: (state: Object, locale: string) => {
    state.locale = locale
  },
  [SET_CURRENT_TYPE]: (state: Object, type: string) => {
    state.currentType = type
  },
  [SET_CLIENT_GEO]: (state: Object, geo: GeoData) => {
    state.geo = Object.assign({}, geo)
    state.geo.latitude = parseFloat(state.geo.loc.split(',')[0])
    state.geo.longitude = parseFloat(state.geo.loc.split(',')[1])
    state.locale = getLocaleFromCode(state.geo.country)
  },
  [SET_LAST_CLICKED_DAY]: (state: Object, day: Object) => {
    state.lastClickedDay = {...day}
  }
}

export default mutations

