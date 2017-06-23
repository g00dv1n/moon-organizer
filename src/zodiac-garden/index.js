// @flow
import aquarius from './aquarius'
import aries from './aries'
import cancer from './cancer'
import capricorn from './capricorn'
import gemini from './gemini'
import leo from './leo'
import libra from './libra'
import pisces from './pisces'
import sagittarius from './sagittarius'
import scorpio from './scorpio'
import taurus from './taurus'
import virgo from './virgo'

const signs = {
  aquarius,
  aries,
  cancer,
  capricorn,
  gemini,
  leo,
  libra,
  pisces,
  sagittarius,
  scorpio,
  taurus,
  virgo
}

export const getGardenZodiacContent = (zodiacSign: string) => {
  return signs[zodiacSign && zodiacSign.toLowerCase()]
}

