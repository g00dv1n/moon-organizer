const relationship = {
  plus: [
    {
      ru: 'совместный отдых, узнавание привычек друг друга и шанс притереться',
      en: 'a joint vacation, learn each other habits and get used to each other'
    },
    {
      ru: 'свадьба для людей, которые мечтают о спокойной жизни',
      en: 'wedding for people who dream of a calm life'
    },
    {
      ru: 'секс трепетный, нежный, ласковые слова, эротический массаж',
      en: 'gentle, timid sex, a lot of tender words & erotic massage'
    }
  ],
  minus: []
}

const beauty = {
  plus: [
    {
      ru: 'общие оздоровительные процедуры для кожи, ароматерапия',
      en: 'general wellness treatments for the skin, aromatherapy'
    },
    {
      ru: 'пилинги, скрабы и другие процедуры, ускоряющие омоложение',
      en: 'peeling, scrubs and other treatments for rejuvenation'
    },
    {
      ru: 'маникюр',
      en: 'manicure'
    },
    {
      ru: 'смена цвета волос',
      en: 'changing hair color'
    },
    {
      ru: 'медитационные упражнения, а также пранаяма и все другие виды дыхательных практик. Увеличение нагрузки',
      en: 'meditative exercises and Pranayama and all other breathing practices. Increase the physical load'
    }
  ],
  minus: [
    {
      ru: 'эпиляция',
      en: 'depilation'
    },
    {
      ru: 'стрижка',
      en: 'haircut'
    },
    {
      ru: 'молоко и молочные продукты, пиво, избыток воды (почки ослаблены)',
      en: 'milk and dairy products, beer, excess water (kidneys are weakened)'
    },
    {
      ru: 'очистительные процедуры',
      en: 'cleansing procedures'
    }
  ]
}

const business = {
  plus: [
    {
      ru: 'адаптация к произошедшим изменениям',
      en: 'adapting to the recent changes'
    }
  ],
  minus: []
}
const fishing = {
  plus: [
    {
      ru: 'хороший клев',
      en: 'good day for fishing'
    }
  ],
  minus: []
}

const garden = {
  plus: [
    {
      ru: 'сбор урожая, плоды будут богаты микроэлементами и витаминами',
      en: 'harvesting, the fruits are full with trace elements and vitamins'
    },
    {
      ru: 'выкапывание корнеплодов, они будут отличаться целебными свойствами',
      en: 'digging roots, they have the healing properties'
    },
    {
      ru: 'посадка и пересадка, растения будут отличаться стремительным ростом и богатым плодоношением',
      en: 'plant and transplant, the plants will grow rapidly and fruiting abundantly'
    },
    {
      ru: 'обработка земли, рыхление, обильный полив',
      en: 'soil treatment, hoeing, watering'
    },
    {
      ru: 'прикорневая подкормка минеральными удобрениями, прививки, черенкования, пасынкования',
      en: 'basal fertilization, inoculation, breeding'
    },
    {
      ru: 'сборка семян',
      en: 'picking seeds'
    }
  ],
  minus: [
    {
      ru: 'обрезка и пикировка плодовых деревьев',
      en: 'pruning fruit trees'
    }
  ]
}

const health = {
  plus: [
    {
      ru: 'дыхательная гимнастика',
      en: 'breathing exercises'
    },
    {
      ru: 'диагностика, удаление, протезирование зубов',
      en: 'dental diagnosis, teeth removal, getting dentures'
    },
    {
      ru: 'лечение хронических заболеваний, начало курса приема лекарственных препаратов',
      en: 'dchronic diseases treatment, beginning of the course of medication intake'
    },
    {
      ru: 'начало курса приема витаминных препаратов',
      en: 'beginning of the vitamin intake course'
    }
  ],
  minus: []
}

const house = {
  plus: [
    {
      ru: 'покупка школьного инвентаря детям, планирование интеллектуального и творческого досуга',
      en: 'purchase the school equipment for children, plan the intellectual and creative leisure'
    }
  ],
  minus: []
}

const shopping = {
  plus: [
    {
      ru: 'одежда детям "на вырост"',
      en: 'children\'s clothing'
    },
    {
      ru: 'товары для интеллектуальной и творческой деятельности (тетради, альбомы для рисования или блокноты, книги, карандаши, ручки, кисти и краски, диски с записями различной музыки, билеты на театральное представление или в музей)',
      en: 'products for intellectual and creative activity (notebooks, sketchbooks, books, pencils, pens, brushes and paint, CDs with various music, tickets to the theater performance or to the museum)'
    }
  ],
  minus: [
    {
      ru: 'любые другие покупки',
      en: 'any other purchases'
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
    ru: 'Облака, Журавль, Священная вещая птица Ивик',
    en: 'Clouds, Crane, sacred ominous bird Ivik'
  },
  energetics: {
    ru: 'пассивный',
    en: 'passive'
  },
  keywords: {
    ru: 'релаксация, медитация, отдых, передача мыслей на расстоянии',
    en: 'relaxation, meditation, transmission of thought at a distance'
  },
  element: {
    ru: 'Металл',
    en: 'Metal'
  },
  direction: {
    ru: 'Запад',
    en: 'West'
  },
  shape: {
    ru: 'круг, овал',
    en: 'round, oval'
  },
  stone: {
    ru: 'мрамор',
    en: 'marble'
  },
  сolor: {
    ru: 'синий, индиго, ультрамариновый, васильковый и сапфировый',
    en: 'blue, indigo, ultramarine, cornflower, and sapphire'
  }
}

export {
  categories,
  main
}

