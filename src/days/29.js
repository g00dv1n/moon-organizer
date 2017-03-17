const relationship = {
  plus: [],
  minus: [
    {
      ru: 'конфликтный день, сохраняйте спокойствие',
      en: 'day may be full of conflicts, stay calm'
    },
    {
      ru: 'свадьба, развод, планирование свадьбы',
      en: 'wedding, divorce, wedding planning'
    },
    {
      ru: 'секс',
      en: 'sex'
    }
  ]
}

const beauty = {
  plus: [
    {
      ru: 'эксперименты с волосами. Новый имидж не только преобразит внешность, но и будет точно отображать ваше мироощущение',
      en: 'experiments with the hair'
    },
    {
      ru: 'массаж или сауна',
      en: 'massage or sauna'
    },
    {
      ru: 'упор на дыхательных упражнениях. Медитации, особенно связанные с созерцанием свечей - для очищения, поднятия тонуса и набора энергии',
      en: 'focus on breathing exercises. Meditations, especially associated with the candles contemplation, will cleanse your body and soul and raise your energy'
    }
  ],
  minus: [
    {
      ru: 'любование своим отражением в зеркале, косметические процедуры',
      en: 'looking in the mirror, beauty treatments'
    },
    {
      ru: 'наращивание волос',
      en: 'hair extension'
    },
    {
      ru: 'мясо, спиртные напиткы, любые сомнительные, экзотические продукты',
      en: 'meat, alcoholic beverages, any questionable, exotic products'
    }
  ]
}

const business = {
  plus: [
    {
      ru: 'генеральная уборка: в офисе, среди задач и персонала. Избавление от ненужного',
      en: 'general cleaning: in the office, among the tasks and staff. All unnecessary throw away'
    }
  ],
  minus: [
    {
      ru: 'опасный день, лучше всем пойти по домам',
      en: 'the dangerous day, it’s the best to let everyone go home'
    }
  ]
}
const fishing = {
  plus: [],
  minus: [
    {
      ru: 'клева нет',
      en: 'the worst day for fishing'
    }
  ]
}

const garden = {
  plus: [
    {
      ru: 'обрезка деревьев и кустарников с целью удаления поврежденных, больных и засохших ветвей',
      en: 'pruning trees and shrubs in order to remove the damaged, sick and dead branches'
    },
    {
      ru: 'опрыскивание растений от вредителей и сорняков',
      en: 'spraying the plants against pests and weeds'
    }
  ],
  minus: [
    {
      ru: 'посадка, прививка',
      en: 'planting, inoculation'
    },
    {
      ru: 'рыхление, копание',
      en: 'hoeing, digging'
    },
    {
      ru: 'оработа с корнями растений',
      en: 'work with the plant roots'
    }
  ]
}

const health = {
  plus: [],
  minus: [
    {
      ru: 'удаление, лечение, протезирование зубов',
      en: 'dental treatment, teeth removal, getting dentures'
    },
    {
      ru: 'хирургические операции',
      en: 'surgical operations'
    }
  ]
}

const house = {
  plus: [
    {
      ru: 'размусоривание',
      en: 'decluttering'
    }
  ],
  minus: [
    {
      ru: 'уборка, стирка, любые другие домашние хлопоты',
      en: 'cleaning, laundry, any other household chores'
    }
  ]
}

const shopping = {
  plus: [],
  minus: [
    {
      ru: 'любые покупки. Угроза низкого качества, брака, обмана',
      en: 'all purchases. The high risk of poor quality, defects, cheating'
    }
  ]
}

const categories = {
  relationship,
  beauty,
  business,
  fishing,
  garden,
  health,
  house,
  shopping
}

const main = {
  symbol: {
    ru: 'Спрут, Осьминог, Гидра',
    en: 'Octopus, Hydra'
  },
  energetics: {
    ru: 'активный',
    en: 'active'
  },
  keywords: {
    ru: 'опасность, повышенный самоконтроль, духовное преобразование, очищение авгиевых конюшен внутреннего мира',
    en: 'danger, increased self-control, spiritual transformation, cleansing the Augean stables of the inner world'
  },
  element: {
    ru: 'Земля',
    en: 'Earth'
  },
  direction: {
    ru: 'Юго-Запад',
    en: 'Southwest'
  },
  shape: {
    ru: 'квадрат, горизонтальный прямоугольник',
    en: 'square, horizontal rectangle'
  },
  stone: {
    ru: 'змеевик, черный жемчуг, перламутр',
    en: 'coil, black pearl'
  },
  сolor: {
    ru: 'красный, алый и черный',
    en: 'red, scarlet, and black'
  }
}

export {
  categories,
  main
}
