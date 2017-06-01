import { getLocaleFromCode } from '../helpers/locales'
import types from './mutationTypes'
import userNormalizer from '../helpers/userNormalizer'

const mutations = {
  [types.SET_LOCALE]: (state, locale) => {
    state.locale = locale
  },
  [types.SET_CURRENT_TYPE]: (state, type) => {
    state.currentType = type
  },
  [types.SET_CLIENT_GEO]: (state, geo) => {
    state.geo = Object.assign({}, geo)
    state.geo.latitude = parseFloat(state.geo.loc.split(',')[0])
    state.geo.longitude = parseFloat(state.geo.loc.split(',')[1])
    state.locale = getLocaleFromCode(state.geo.country)
  },
  [types.SET_LAST_CLICKED_DAY]: (state, day) => {
    // clone day to lastClickedDay
    state.lastClickedDay = {...day}
  },
  [types.SET_LAST_CLICKED_LUNAR_NUMBER]: (state, lunarDayNumber) => {
    state.lastClickedLunarNumber = lunarDayNumber
  },
  [types.SET_NOT_FIRST_TIME]: (state, flag) => {
    state.notFirstTime = flag
    localStorage.setItem('NOT_FIRST_TIME', flag)
  },
  [types.SET_TODAY]: (state, day) => {
    state.today = day
  },
  [types.SET_MODAL]: (state, modal) => {
    state.modal = modal
  },
  [types.SET_USER]: (state, user) => {
    state.user = Object.assign({}, state.user, userNormalizer(user))
  }
}

export default mutations

