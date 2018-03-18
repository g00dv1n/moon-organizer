import { main } from './main'
import { beauty } from './beauty'
import { business } from './business'
import { garden } from './garden'
import { health } from './health'
import { house } from './house'
import { lucky } from './lucky'
import { relationship } from './relationship'
import { shopping } from './shopping'

import random from 'lodash/random'

const promoContent = {
  main,
  beauty,
  business,
  garden,
  health,
  house,
  lucky,
  relationship,
  shopping
}

const buildVPLink = (categoryName, content) => {
  const prefix = '/calendar/'
  const queryParams = {
    location: categoryName || 'day',
    title: content.titleConst || null,
    textCode: content.textCode || 't1',
    btn: content.btnLangConst || content.btn || 'learnMore'
  }

  const queryString = Object
    .keys(queryParams)
    .filter(key => !!queryParams[key])
    .map(key => `${key}=${queryParams[key]}`)
    .join('&')

  return `${prefix}vp-promo-hints?${queryString}`
}

export const getRandomPromo = (categoryName) => {
  const content = promoContent[categoryName]
   ? promoContent[categoryName] : promoContent['main']
  const randomContent = content[random(0, content.length - 1)]
  randomContent.virtualPage = buildVPLink(categoryName, randomContent)
  return randomContent
}
