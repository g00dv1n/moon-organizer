import moment from 'moment'
import _ from 'lodash'
import lunarDays from './lunardays'
import moonPhase from './moonphase'
/* eslint-disable no-unused-vars */
import ru from 'moment/locale/ru'

const isToday = m => m.isSame(moment(), 'day')
const getMonths = m => m.months()
const weekOfMonth = m => m.week() - moment(m).startOf('month').week()

const getWeekDays = (m) => {
  // transform array
  // first weekDay Must be first in array
  let weekdays = m.localeData().weekdaysShort()

  let i = m.localeData().firstDayOfWeek()
  let start = weekdays.slice(i)
  let end = weekdays.slice(0, i)
  let res = start.concat(end)
  return res
}

const style = (d) => {
  const maxNumberOfRows = 6
  const topStep = 100 / maxNumberOfRows
  const leftStep = 100 / 7

  const weekday = d.weekday()
  const weekNumber = weekOfMonth(d)
  return {
    top: weekNumber * topStep + '%',
    left: weekday * leftStep + '%'
  }
}

const maxDurationDay = (date, ld) => {
  const dateStart = moment(date).startOf('day')
  const dateEnd = moment(date).endOf('day')

  let newLd = _.map(ld, (d) => {
    let s = moment.max(moment(d.start), moment(dateStart))
    let e = moment.min(moment(d.end), moment(dateEnd))
    let diff = moment(e).diff(moment(s))
    let duration = moment.duration(diff).asMilliseconds()
    return _.extend(d, {duration})
  })
  return _.maxBy(ld, d => d.duration).number
}

const month = (date = moment(), locale = 'ru', latitude = 50, longitude = 30) => {
  // init data block
  const localeMoment = moment().locale(locale)
  const localeDate = moment(date).locale(locale)
  // get month name using locale
  const monthName = moment(localeDate).format('MMMM')
  // get start of month date
  const startOfMonth = moment(localeDate).startOf('month')
  // get number days in month
  const daysInMonth = localeDate.daysInMonth()
  // get week day number of first day of month [0-6]
  const weekDays = getWeekDays(localeMoment)
  const year = localeDate.year()

  // calculate days
  let days = []

  const currentDay = moment(startOfMonth)

  for (let i = 0; i < daysInMonth; i++) {
    let weekday = currentDay.weekday()
    let weekNumber = weekOfMonth(currentDay)
    let ld = lunarDays(currentDay, latitude, longitude)

    let dayInfo = {
      day: currentDay.date(),
      date: currentDay.toDate(),
      isToday: isToday(currentDay),
      lunarDays: ld,
      lunarDaysStr: maxDurationDay(currentDay, ld),
      moonPhase: moonPhase(ld[0].number),
      style: style(currentDay)
    }

    days.push(dayInfo)
    currentDay.add(1, 'd')
  }

  return {days, monthName, weekDays, year}
}

export default month
