// @flow
import bd1 from './1'
import bd2 from './2'
import bd3 from './3'
import bd4 from './4'
import bd5 from './5'
import bd6 from './6'
import bd7 from './7'
import bd8 from './8'
import bd9 from './9'
import bd10 from './10'
import bd11 from './11'
import bd12 from './12'
import bd13 from './13'
import bd14 from './14'
import bd15 from './15'
import bd16 from './16'
import bd17 from './17'
import bd18 from './18'
import bd19 from './19'
import bd20 from './20'
import bd21 from './21'
import bd22 from './22'
import bd23 from './23'
import bd24 from './24'
import bd25 from './25'
import bd26 from './26'
import bd27 from './27'
import bd28 from './28'
import bd29 from './29'
import bd30 from './30'

const lunarBirthdayContent = {
  bd1,
  bd2,
  bd3,
  bd4,
  bd5,
  bd6,
  bd7,
  bd8,
  bd9,
  bd10,
  bd11,
  bd12,
  bd13,
  bd14,
  bd15,
  bd16,
  bd17,
  bd18,
  bd19,
  bd20,
  bd21,
  bd22,
  bd23,
  bd24,
  bd25,
  bd26,
  bd27,
  bd28,
  bd29,
  bd30
}

export const getLunarBirthdayContent = (day: number) => {
  return lunarBirthdayContent['bd' + day]
}
