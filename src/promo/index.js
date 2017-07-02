import { main } from './main'
import { beauty } from './beauty'
import { business } from './business'
import { garden } from './garden'
import { health } from './health'
import { house } from './house'
import { lucky } from './lucky'
import { relationship } from './relationship'
import { shopping } from './shopping'

import _ from 'lodash'

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
  const content = promoContent[categoryName || 'main']
  return content[_.random(0, content.length - 1)]
}
