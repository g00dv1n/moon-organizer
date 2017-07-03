// @flow
import config from '../config'

const getters = {
  calendarTypes (state: any) {
    return state.calendarTypes.map((type) => {
      let text = type.text[state.locale]
      let name = type.name
      return {name, text}
    })
  },
  constants (state: any) {
    const constants = state.constants
    const locale = state.locale
    const res = {}
    Object.keys(constants).forEach((k) => {
      res[k] = constants[k][locale]
    })
    return res
  },
  weekDays (state: any) {
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
  locale (state: any) {
    return state.locale
  },
  geo (state: any) {
    return state.geo
  },
  axios (state: any) {
    return state.axios
  },
  lastClickedDay (state: any) {
    return state.lastClickedDay
  },
  userAvatar (state: any) {
    return state.user.avatarUrl
      ? config.API_ROOT + 'public/avatar/' + state.user.avatarUrl : require('../assets/avatar.png')
  },
  user (state: any): User | null {
    const user = Object.assign({}, state.user)
    if (!user) return null
    return user
  },
  tasks (state: any): TodoTask[] {
    return state.user.tasks || []
  }
}

export default getters
