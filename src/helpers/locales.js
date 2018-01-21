const localesCountries = {
  ru: ['UA', 'RU', 'BY', 'UZ', 'KZ', 'GE', 'AZ', 'LT', 'MD', 'LV', 'KG', 'TJ', 'AM', 'TM', 'EE']
}

const defaultLocale = 'en'

const getAllLocales = () => [...Object.keys(localesCountries), defaultLocale]

const getLocaleFromCode = (code) => {
  return Object.keys(localesCountries).find(l => localesCountries[l].indexOf(code) !== -1) || defaultLocale
}

export {
  getAllLocales,
  getLocaleFromCode
}
