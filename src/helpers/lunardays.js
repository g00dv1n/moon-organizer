// @flow

import suncalc from 'suncalc'
import lune from 'lune'
import moment from 'moment'
import _ from 'lodash'

const isDayBetween = (start, end, day) => {
  return moment(day).startOf('day').isBetween(moment(start), moment(end)) ||
    moment(day).endOf('day').isBetween(moment(start), moment(end))
}

const daysRange = (startDate, numberOfDays) => {
  return _.map(_.range(0, numberOfDays + 1), i => moment(moment(startDate).startOf('day').add(i, 'days')))
}

const recentNewMoon = (date) => {
  let recentPhases = lune.phase_hunt(moment(date).toDate())
  let newMoon = moment(recentPhases.new_date)
  return newMoon
}

const daysBetween = (start, end) => {
  return moment(end).endOf('day').diff(moment(start).startOf('day'), 'days')
}

const moonRises = (days, latitude, longitude) => {
  return _.chain(days)
    .map(day => suncalc.getMoonTimes(moment(day).toDate(), latitude, longitude).rise)
    .filter(rise => Boolean(rise))
    .map(rise => moment(rise))
    .value()
}

const lunarDays = (date: moment$Moment, latitude: number, longitude: number) => {
  let newMoon = recentNewMoon(date)
  let diffDays = daysBetween(newMoon, date)
  let initDate = moment(newMoon).startOf('day')

  // WE NEED CALCULATE CURRENT DAY + 2 for all moon days
  let days = daysRange(initDate, diffDays + 4)

  // check if first rist before new moon delete IT
  let rises = moonRises(days, latitude, longitude)
  if (moment(_.head(rises)).isSameOrBefore(newMoon)) {
    rises = _.drop(rises)
  }
  let moonDays = [{
    number: 1,
    start: newMoon,
    end: _.head(rises)
  }]

  for (let i = 0; i < rises.length - 1; i++) {
    moonDays.push({
      // +2 because we started from 2 day
      number: i + 2,
      start: rises[i],
      end: rises[i + 1]
    })
  }
  let res = _.filter(moonDays, ({start, end}) => isDayBetween(start, end, date))
  return res
}

export default lunarDays

