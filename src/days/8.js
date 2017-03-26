const relationship = {
  plus: [
    {
      ru: 'извинитесь перед партнером, если есть за что',
      en: 'apologize to a partner, if you have the reason for it'
    }
  ],
  minus: [
    {
      ru: 'свадьба (приведет к нестабильности)',
      en: 'wedding (will lead to instability)'
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
      ru: 'очищение организма от шлаков, новые косметологические процедуры',
      en: 'cleansing the body of toxins, new cosmetic procedures'
    },
    {
      ru: 'голодание, вегетарианская пища, сложносоставные блюда из многих ингредиентов',
      en: 'fasting, vegetarian food, dishes with many ingredients'
    },
    {
      ru: 'составление сложных сборов трав, притираний, мазей, которые будут использоваться потом',
      en: 'making complex collections of herbs, ointments, salves, which will be used later'
    },
    {
      ru: 'стрижка к красоте и благополучию',
      en: 'haircut brings beauty and well-being'
    },
    {
      ru: 'покраска, смена имиджа, эксперименты',
      en: 'hair coloring, look changing, experiments'
    },
    {
      ru: 'уход за лицом',
      en: 'facial care'
    },
    {
      ru: 'релаксационный массаж',
      en: 'relaxation massage'
    },
    {
      ru: 'медитации и все виды упражнений на расслабление',
      en: 'meditation and all kinds of relaxation exercises'
    },
    {
      ru: 'проработка упражнений, особенно тех, которые до этого удавались с трудом',
      en: 'work on familiar exercises'
    },
    {
      ru: 'растяжка. Плавные тянущие упражнения для снятия хронического напряжения',
      en: 'stretching. Smooth pulling exercises to relieve chronic stress'
    }

  ],
  minus: [
    {
      ru: 'увеличение нагрузки',
      en: 'physical load increasing'
    }
  ]
}

const business = {
  plus: [
    {
      ru: 'второй шанс для неудавшихся проектов – при условии применения к ним нового подхода',
      en: 'second chance for failed projects - in case if you apply a new approach to them'
    },
    {
      ru: 'открытость ко всему новому – предложениям, методам',
      en: 'openness to everything new - proposals, methods, etc.'
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
      ru: 'уборка ботвы и листьев',
      en: 'haulm and leaves picking'
    },
    {
      ru: 'полив растений',
      en: 'watering'
    }
  ],
  minus: [
    {
      ru: 'укоренение, посадка, пересадка, черенкование овощных, плодовых, бахчевых культур, зелени, ягодных кустарников, земляники и клубники',
      en: 'rooting, planting, transplanting, breeding vegetables, fruit, melons, herbs, berry bushes, strawberries and strawberry'
    }
  ]
}

const health = {
  plus: [
    {
      ru: 'очищение желудка,голодание, очистка',
      en: 'stomach cleansing, fasting'
    }
  ],
  minus: []
}

const house = {
  plus: [
    {
      ru: 'второй шанс для неудавшихся домашних дел (например, приготовить блюдо, которое раньше не удавалось)',
      en: 'a second chance for the failed home affairs (for example, cook something that hasn\'t came out successful before)'
    }
  ],
  minus: [
    {
      ru: 'пересадка растений',
      en: 'transplant the houseplants'
    }
  ]
}

const shopping = {
  plus: [
    {
      ru: 'антиквариат, вещи, уже бывшие в употреблении',
      en: 'antiques, things that have already been in use'
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
    ru: 'Птица Феникс; Ларь с Сокровищами; Павлин, Мотылек, Костер',
    en: 'Phoenix Bird; Peacock, Butterfly, Fire'
  },
  energetics: {
    ru: 'пассивный',
    en: 'passive'
  },
  keywords: {
    ru: 'возрождение, переход на новый уровень, уединение, внутренняя свобода, смелость, открытость всему новому, неспешность, расслабленность',
    en: 'rebirth, transition to a new level, privacy, inner freedom, courage, open-mindedness, relax'
  },
  element: {
    ru: 'Земля, Огонь',
    en: 'Earth, Fire'
  },
  direction: {
    ru: 'Северо-Восток',
    en: 'Northeast'
  },
  shape: {
    ru: 'квадрат, горизонтальный прямоугольник',
    en: 'square, horizontal rectangle'
  },
  stone: {
    ru: 'гранатит, уваровит, оливин, хризолит',
    en: 'garnet, uvarovite, olivine, beryl'
  },
  сolor: {
    ru: 'красный, алый и черный',
    en: 'red, scarlet, and black'
  }
}

export default {
  categories,
  main
}
