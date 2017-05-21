// @flow
import config from '../config'

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
  weekDays (state: Object) {
    const weekDays = state.weekDays
    const locale = state.locale
    const res = {}

    Object.keys(weekDays)
      .forEach((weekDay) => {
        res[weekDay] = {}
        Object.keys(weekDays[weekDay])
          .forEach((infoField) => {
            if (typeof weekDays[weekDay][infoField] === 'object' && locale in weekDays[weekDay][infoField]) {
              res[weekDay][infoField] = weekDays[weekDay][infoField][locale]
            } else {
              res[weekDay][infoField] = weekDays[weekDay][infoField]
            }
          })
      })
    return res
  },
  locale (state: Object) {
    return state.locale
  },
  lastClickedDay (state: Object) {
    return state.lastClickedDay
  },
  userAvatar (state) {
    return state.user.avatarUrl ? config.API_ROOT + 'public/avatar/' + state.user.avatarUrl : ''
  }
}

export default getters
