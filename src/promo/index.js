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

export const getRandomPromo = (categoryName) => {
  const content = promoContent[categoryName]
   ? promoContent[categoryName] : promoContent['main']
  return content[random(0, content.length - 1)]
}
