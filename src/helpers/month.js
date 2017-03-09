import moment from 'moment'
/* eslint-disable no-unused-vars */
import ru from 'moment/locale/ru'

export default class Month {
  constructor (date = moment(), locale = 'ru') {
    // setup locale
    // moment.locale(locale)
    this.locale = locale
    this.date = moment(date).locale(locale)
    // get month name using locale
    this.monthName = moment(this.date).format('MMMM')
    // get month nubmer [0-11]
    this.monthNumber = this.date.month()
    // get start of month date
    this.startOfMonth = moment(this.date).startOf('month')
    // get number days in month
    this.daysInMonth = this.date.daysInMonth()
    // get week day number of first day of month [0-6]
    this.startWeekDay = this.startOfMonth.weekday()
    // check if it current month
    this.isCurrentMonth = this.date.month() === moment().month()

    this.months = this.getMonths()
    this.year = this.date.year()

    console.log(this)
  }

  getMonths () {
    return moment.months()
  }

  weekOfMonth (m) {
    // start from 0
    return m.week() - moment(m).startOf('month').week()
  }

  getWeekDays () {
    // transform array
    // first weekDay Must be first in array
    let weekdays = moment.weekdaysShort()

    let i = moment.localeData().firstDayOfWeek()
    let start = weekdays.slice(i)
    let end = weekdays.slice(0, i)
    let res = start.concat(end)
    return res
  }

  isToday (m) {
    //  return m.date() === moment().date()
    /*  const formatStr = 'YYYY-MM-DD'
    const date = moment(m).format(formatStr)
    const now = moment().format(formatStr) */
    return m.isSame(moment(), 'day')
  }

  getMonthData () {
    let result = []

    let currentDay = moment(this.startOfMonth)

    let maxNumberOfRows = 6
    let topStep = 100 / maxNumberOfRows
    let leftStep = 100 / 7

    for (let i = 0; i < this.daysInMonth; i++) {
      let weekday = currentDay.weekday()
      let weekNumber = this.weekOfMonth(currentDay)

      let dayInfo = {
        style: {
          top: weekNumber * topStep + '%',
          left: weekday * leftStep + '%'
        },
        day: currentDay.date(),
        isToday: this.isToday(currentDay)
      }

      result.push(dayInfo)
      currentDay.add(1, 'd')
    }
    return result
  }

}
