const relationship = {
  plus: [],
  minus: [
    {
      ru: 'свадьба',
      en: 'wedding'
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
      ru: 'растительная пища, больше молока, ватрушки с орехами, кисломолочные продукты',
      en: 'vegetable food, dairy products, milk, baked cheesecake with nuts'
    },
    {
      ru: 'физические упражнения, которые укрепляют позвоночник, упражнения в бассейне',
      en: 'physical exercises that strengthen the spine - especially, in the pool'
    },
    {
      ru: 'стрижка - волосы будут лучше расти, станут густыми и пышными',
      en: 'haircut - hair will grow better, become thick and lush'
    },
    {
      ru: 'напряженные тренировки, направленные на укрепление уже достигнутых результатов',
      en: 'hard workouts aimed at strengthening of the already achieved results'
    },
    {
      ru: 'массаж, гармонизация работы чакр, медитации на природе',
      en: 'massage, harmonizing the work of the chakras, meditation in the forest or on the riverside'
    }
  ],
  minus: [
    {
      ru: 'косметические операции, даже удаление прыщей',
      en: 'cosmetic surgery, even acne removal'
    },
    {
      ru: 'химическое воздействие на волосы (окрашивание, завивка). Сложная укладка, сделанная в этот день, продержится недолго',
      en: 'a chemical effect on the hair (coloring, perming). Complicated hairdo will not stay beautiful for long'
    },
    {
      ru: 'мясо, переедание',
      en: 'meat, Binge eating'
    },
    {
      ru: 'новые упражнения',
      en: 'new exercises'
    }
  ]
}

const business = {
  plus: [
    {
      ru: 'поиск финансирования и поддержки со стороны',
      en: 'search for funding and support'
    },
    {
      ru: 'правильное завершение дел',
      en: 'proper completion of projects'
    },
    {
      ru: 'анализ ошибок и недостатков процесса',
      en: 'analysis of the process - weaknesses and errors'
    },
    {
      ru: 'коренные реформы',
      en: 'the radical reforms'
    }
  ],
  minus: []
}
const fishing = {
  plus: [
    {
      ru: 'ЖОР!',
      en: 'best day for fishing!'
    }
  ],
  minus: []
}

const garden = {
  plus: [
    {
      ru: 'обрезка деревьев, прививка, перепрививка',
      en: 'pruning trees, inoculation'
    },
    {
      ru: 'посадка и сбор плодов, которые находятся в земле: морковь, свекла, картофель, редис, репа и т.д.',
      en: 'planting and picking the underground fruits: carrots, beets, potatoes, radishes, etc.'
    },
    {
      ru: 'обрезка усов клубники',
      en: 'pruning the strawberry runners'
    },
    {
      ru: 'выкапывание цветочных луковиц',
      en: 'digging flower bulbs '
    },
    {
      ru: 'прореживание всходов, прополка, опрыскивание культур от вредителей, удобрение почвы',
      en: 'thinning of seedlings, weeding, spraying against pests, soil fertilizin'
    }
  ],
  minus: [
    {
      ru: 'обильный полив',
      en: 'abundant watering'
    }
  ]
}

const health = {
  plus: [
    {
      ru: 'отказ от вредных привычек',
      en: 'getting rid of harmful habits'
    }
  ],
  minus: []
}

const house = {
  plus: [
    {
      ru: 'чистка фарфоровой посуды',
      en: 'porcelain tableware cleaning'
    },
    {
      ru: 'большая стирка, глажка, мелкий ремонт одежды',
      en: 'big laundry, ironing, clothes repair'
    }
  ],
  minus: []
}

const shopping = {
  plus: [
    {
      ru: 'спортивный инвентарь - штанги, гантели, эспандеры, различные тренажеры',
      en: 'sports equipment - weights, dumbbells, expanders, etc.'
    }
  ],
  minus: [
    {
      ru: 'любые другие покупки, особенно оружие и любые опасные предметы вроде кухонных ножей',
      en: 'all other purchases, especially the arms and any dangerous items such as kitchen knives'
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
    ru: 'Макара – полурыба-полукрокодил',
    en: 'Makara (half fish, half crocodile)'
  },
  energetics: {
    ru: 'активный',
    en: 'active'
  },
  keywords: {
    ru: 'сбор урожая, правильное завершение дел, понимание своих ошибок, коренные реформы, жертвоприношение',
    en: 'harvest, proper completion of cases, understanding your mistakes, radical reforms, sacrifice'
  },
  element: {
    ru: 'Земля',
    en: 'Earth'
  },
  direction: {
    ru: 'центр, середина, основание',
    en: 'center, middle, base'
  },
  shape: {
    ru: 'квадрат',
    en: 'square'
  },
  stone: {
    ru: 'раухтопаз, черный нефрит, крокодилит, сардер',
    en: 'black jade'
  },
  сolor: {
    ru: 'оранжевый, каштановый, шоколадный и коричневый',
    en: 'orange, red, and chocolate brown'
  }
}

export {
  categories,
  main
}
