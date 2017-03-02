import calendarTypes from 'src/store/calendar-types'
import getters from 'src/store/getters'

const locale = 'ru'

const store = {
  calendarTypes,
  locale
}

let res = getters.calendarTypes(store)
console.log(res)
