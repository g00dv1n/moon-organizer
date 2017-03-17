const relationship = {
  plus: [
    {
      ru: 'анализ своего поведения, обращение к семейному психологу, чтение психологической литературы об отношениях',
      en: 'analyze of the self-behavior, visit the family psychologist, read psychological literature about the relationship'
    }
  ],
  minus: [
    {
      ru: 'свадьба',
      en: 'wedding'
    },
    {
      ru: 'секс, удовольствия не принесет',
      en: 'sex, it will not bring the pleasure'
    }
  ]
}

const beauty = {
  plus: [
    {
      ru: 'комплексное очищение организма, водные процедуры',
      en: 'comprehensive cleansing, water treatments'
    },
    {
      ru: '"терапия молчанием"',
      en: '"silent treatment"'
    },
    {
      ru: 'сведение родинок и бородавок, разглаживание морщин, очистительные процедуры',
      en: 'birthmarks and warts removal, wrinkles smoothing'
    },
    {
      ru: 'стрижка привлечет улучшение финансового положения, увеличение собственности и благорасположение начальства',
      en: 'haircut will attract the finances, increase the ownership and benevolence of the authorities'
    },
    {
      ru: 'рыба, яйца, морепродукты и грибы',
      en: 'fish, eggs, seafood and mushrooms'
    },
    {
      ru: 'простые блюда, голодание',
      en: 'simple meals, fasting'
    },
    {
      ru: 'только расслабляющие и растягивающие упражнения',
      en: 'relaxing and stretching exercises'
    },
    {
      ru: 'точечные массажи и дыхательные гимнастики, время на свежем воздухе вдали от толпы',
      en: 'acupressure and breathing exercises on the fresh air away from the crowds'
    }
  ],
  minus: []
}

const business = {
  plus: [
    {
      ru: 'поиск причинно-следственных связей своих успехов и поражений',
      en: 'look to the cause-effect relationships of your successes and failures'
    },
    {
      ru: 'расстановка приоритетов',
      en: 'prioritization'
    },
    {
      ru: 'посещение наставника, учителя',
      en: 'visiting the teacher or coach'
    },
    {
      ru: 'адвокатура',
      en: 'advocacy'
    }
  ],
  minus: []
}
const fishing = {
  plus: [],
  minus: [
    {
      ru: 'слабый клев',
      en: 'middling day'
    }
  ]
}

const garden = {
  plus: [
    {
      ru: 'обрезка, прививка и перепрививка кустарников и деревьев',
      en: 'pruning, inoculation shrubs and trees '
    },
    {
      ru: 'борьба с вредителями и болезнями',
      en: 'fight against pests and diseases '
    },
    {
      ru: 'уборка листьев и ботвы',
      en: 'haulm and leaves picking'
    },
    {
      ru: 'благоустройство сада',
      en: 'garden landscaping '
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
      ru: 'проверка систем безопасности дома, автомобиля',
      en: 'check the security systems of your home and car'
    }
  ],
  minus: [
    {
      ru: 'любые домашние хлопоты',
      en: 'any household chores'
    }
  ]
}

const shopping = {
  plus: [
    {
      ru: 'хороший день, чтобы сдать что-то в ремонт, или отдать на благотворительность, или выбросить',
      en: 'repair something, or donate, or throw away'
    }
  ],
  minus: [
    {
      ru: 'любые покупки',
      en: 'all purchases'
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
    ru: 'Жаба; Болото, Лягушка-путешественница, Омут, Трясина',
    en: 'Toad; Swamp; Frog-traveler; Whirlpool'
  },
  energetics: {
    ru: 'пассивный',
    en: 'passive'
  },
  keywords: {
    ru: 'плавный переход от апатии к новым целям, обновление движения, разоблачение зла, понимание сути жизненного процесса, следование естественным природным ритмам, четкое определение своих жизненных позиций',
    en: 'smooth transition from apathy to the new goals, start the motion, exposing the evil, understanding the essence of the life process, following the rhythms of nature, a clear awareness of your own attitudes'
  },
  element: {
    ru: 'Земля',
    en: 'Earth'
  },
  direction: {
    ru: 'Северо-Восток',
    en: 'Northeast'
  },
  shape: {
    ru: 'квадрат, вертикальный прямоугольник',
    en: 'square, vertical rectangle'
  },
  stone: {
    ru: 'аурипигмент, желтый нефрит, жадеит, хризопраз',
    en: 'orpiment, yellow jade, jade'
  },
  сolor: {
    ru: 'голубой, морской волны и лазоревый',
    en: 'blue, aqua and azure'
  }
}

export {
  categories,
  main
}
