// @flow

/*
 B = (sin (2pi*t/P))*100 % где P = {23,28,33}

 B — состояния биоритма в % либо может выражаться как состояние относительно нуля,
 а также состояния нарастания или спадания.

 pi — число π, принимаем равным 3,14

 t — количество дней, прошедших с даты рождения до текущего момента.

 P — фаза биоритма.
 */

import moment from 'moment'

type BDate = moment$Moment | Date

export const getBioPoint = (birthday: BDate, date: BDate, bioPhase: number) => {
  const s = moment(birthday)
  const e = moment(date)

  const daysDiff = e.diff(s, 'days')

  const DOUBLE_PI = 2 * Math.PI
  const sinParam = (DOUBLE_PI * daysDiff) / bioPhase

  return Math.round(Math.sin(sinParam) * 100)
}

export const getBioPoints = (birthday: BDate, date: BDate, numberOfDays: number, bioPhase: number) => {
  let res = []
  for (let i = 0; i < numberOfDays; i++) {
    const _date = moment(date).add(i, 'days')
    res.push({
      per: getBioPoint(birthday, _date, bioPhase),
      date: _date
    })
  }
  return res
}

export const getBiorhytms = (birthday: BDate, numberOfDays: number = 30, date: BDate = moment()) => {
  const CYCLE_PHYSICAL = 23
  const CYCLE_EMOTIONAL = 28
  const CYCLE_INTELLECTUAL = 33
  return {
    physical: getBioPoints(birthday, date, numberOfDays, CYCLE_PHYSICAL),
    emotional: getBioPoints(birthday, date, numberOfDays, CYCLE_EMOTIONAL),
    intellectual: getBioPoints(birthday, date, numberOfDays, CYCLE_INTELLECTUAL)
  }
}
