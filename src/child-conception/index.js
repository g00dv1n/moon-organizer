// @flow
const boys = {
  title: {
    ru: 'зачатие мальчиков',
    en: 'time to conceive a boy'
  },
  signs: ['aries', 'gemini', 'leo', 'libra', 'sagittarius', 'aquarius']
}

const girls = {
  title: {
    ru: 'зачатие девочек',
    en: 'time to conceive a girl'
  },
  signs: ['taurus', 'cancer', 'virgo', 'scorpio', 'capricorn', 'pisces']
}

export const getChildConception = (zodiac: string) => {
  return boys.signs.indexOf(zodiac && zodiac.toLowerCase()) !== -1 ? boys : girls
}
