import { getLocaleFromCode } from 'helpers/locales'

const SET_LOCALE = 'SET_LOCALE'
const SET_CURRENT_TYPE = 'SET_CURRENT_TYPE'
const SET_CLIENT_GEO = 'SET_CLIENT_GEO'

const mutations = {
  [SET_LOCALE]: (state, locale) => {
    state.locale = locale
  },
  [SET_CURRENT_TYPE]: (state, type) => {
    state.currentType = type
  },
  [SET_CLIENT_GEO]: (state, geo) => {
    state.geo = Object.assign({}, geo)
    state.geo.latitude = parseFloat(state.geo.loc.split(',')[0])
    state.geo.longitude = parseFloat(state.geo.loc.split(',')[1])
    state.locale = getLocaleFromCode(state.geo.country)
  }
}

export default mutations

