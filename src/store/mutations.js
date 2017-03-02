/**
 * Created by g00dv1n on 01.03.17.
 */

const SET_LOCALE = 'SET_LOCALE'
const SET_CURRENT_TYPE = 'SET_CURRENT_TYPE'

const mutations = {
  [SET_LOCALE]: (state, locale) => {
    state.locale = locale
  },
  [SET_CURRENT_TYPE]: (state, type) => {
    state.currentType = type
  }
}

export default mutations

