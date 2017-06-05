// @flow

import config from '../config'

const getters = {
  calendarTypes (state) {
    return state.calendarTypes.map((type) => {
      let text = type.text[state.locale]
      let name = type.name
      return {name, text}
    })
  },
  constants (state) {
    const constants = state.constants
    const locale = state.locale
    const res = {}
    Object.keys(constants).forEach((k) => {
      res[k] = constants[k][locale]
    })
    return res
  },
  weekDays (state) {
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
  locale (state) {
    return state.locale
  },
  axios (state) {
    return state.axios
  },
  lastClickedDay (state) {
    return state.lastClickedDay
  },
  userAvatar (state) {
    return state.user.avatarUrl ? config.API_ROOT + 'public/avatar/' + state.user.avatarUrl : ''
  },
  user (state): User {
    const user = Object.assign({}, state.user)
    if (!user) return null
    const {categories} = user
    user.categories = categories ? categories.split(';') : []
    return user
  }
}

export default getters
