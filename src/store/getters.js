// @flow

const getters = {
  calendarTypes (state: Object) {
    return state.calendarTypes.map((type) => {
      let text = type.text[state.locale]
      let name = type.name
      return {name, text}
    })
  },
  constants (state: Object) {
    const constants = state.constants
    const locale = state.locale
    const res = {}
    Object.keys(constants).forEach((k) => {
      res[k] = constants[k][locale]
    })
    return res
  },
  locale (state: Object) {
    return state.locale
  },
  lastClickedDay (state: Object) {
    return state.lastClickedDay
  }
}

export default getters
