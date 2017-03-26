const relationship = {
  plus: [],
  minus: [
    {
      ru: 'конфликтный день, сохраняйте спокойствие',
      en: 'day may be full of conflicts, stay calm'
    },
    {
      ru: 'свадьба (влечет разочарование)',
      en: 'wedding (will lead to the disappointment)'
    },
    {
      ru: 'секс - лучше воздержаться во избежание насилия',
      en: 'sex - refrain to avoid the violence'
    }
  ]
}

const beauty = {
  plus: [
    {
      ru: 'очищение от шлаков, траволечение, ароматерапия, водные процедуры, успокаивающие',
      en: 'cleansing of toxins, herbalism, aromatherapy, hydrotherapy, soothing procedures'
    },
    {
      ru: 'обертывания и релакс-процедуры ',
      en: 'body wraps and relaxation treatments'
    },
    {
      ru: 'уход за ногами – кожа на долгое время останется шелковистой и мягкой',
      en: 'foot care - the skin will remain silky and soft for a long time'
    },
    {
      ru: 'простая еда, каши, крупы',
      en: 'simple food, cereals'
    },
    {
      ru: 'медитации и сеансы релаксации',
      en: 'meditation and relaxation sessions'
    }
  ],
  minus: [
    {
      ru: 'голодание, чистка лица',
      en: 'fasting, facial cleansing '
    },
    {
      ru: 'грибы, неизвестные продукты, мясо, искусственная еда',
      en: 'mushrooms, unknown products, meat, artificial food'
    },
    {
      ru: 'тренировки и активные упражнения',
      en: 'workouts and active exercises'
    }
  ]
}

const business = {
  plus: [
    {
      ru: 'оценка рисков, проработка страхов',
      en: 'risks assessment, fighting fears'
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
      ru: 'обработка, рыхление земли, посадка и пересадка культур, дающих надземные плоды',
      en: 'soil treatment, hoeing, planting and transplanting plants with the above ground fruits'
    },
    {
      ru: 'подкормка и прививка растений',
      en: 'fertilization and inoculation of plants '
    },
    {
      ru: 'обрезка, черенкование, подготовка к укоренению и укоренение клубничных усов',
      en: 'pruning, preparation for rooting and rooting of the strawberry runners '
    },
    {
      ru: 'прищипка и пикирование растений, прореживание всходов и сбор семян (собранные в этот день семена дадут дружные всходы и отличный урожай)',
      en: 'pruning plants, thinning the seedlings and seeds picking (the seeds will give an excellent harvest) '
    },
    {
      ru: 'полив и подкормка минеральными удобрениями',
      en: 'watering and fertilization'
    },
    {
      ru: 'сбор плодов',
      en: 'harvest the fruits '
    }
  ],
  minus: [
    {
      ru: 'обрезка плодовых деревьев, может привести к их гибели',
      en: 'pruning the fruit trees may lead to their death'
    }
  ]
}

const health = {
  plus: [
    {
      ru: 'обратить внимание на хронические болезни',
      en: 'pay attention to the chronic diseases'
    },
    {
      ru: 'очищение от шлаков, траволечение, ароматерапия, водные процедуры, успокаивающие',
      en: 'cleansing from slags, herbalism, aromatherapy, hydrotherapy, soothing procedures'
    }
  ],
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
      ru: 'проверка систем охраны дома',
      en: 'check your home security systems'
    },
    {
      ru: 'уход, удобрение комнатных растений',
      en: 'houseplants fertilizing and care'
    }
  ],
  minus: [
    {
      ru: 'работа на кухне, столярные и слесарные работы',
      en: 'kitchen, carpentry and plumbing affairs'
    }
  ]
}

const shopping = {
  plus: [],
  minus: [
    {
      ru: 'любые покупки несут в себе опасность, даже еда! Лучше поешьте в ресторане',
      en: 'all purchases may bring danger, even the food! It is better to eat in the restaurant'
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
    ru: 'Летучая Мышь; Нетопырь',
    en: 'The Bat'
  },
  energetics: {
    ru: 'активный',
    en: 'active'
  },
  keywords: {
    ru: 'напряженность, хаотичность, негативные эмоции, стремление к радости, смелость, преодоление страха',
    en: 'tension, chaos, negative emotions, the desire for happiness, courage, fear overcoming'
  },
  element: {
    ru: 'Огонь',
    en: 'Fire'
  },
  direction: {
    ru: 'Юг',
    en: 'South'
  },
  shape: {
    ru: 'треугольник, зигзаг, изломанная линия',
    en: 'triangle, zigzag, broken line'
  },
  stone: {
    ru: 'черный жемчуг, александрит, раухтопаз (дает одиночество)',
    en: 'black pearl, alexandrite'
  },
  сolor: {
    ru: 'оранжевый, каштановый, шоколадный и коричневый',
    en: 'orange, red, and chocolate brown'
  }
}

export default {
  categories,
  main
}
