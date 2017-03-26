const relationship = {
  plus: [
    {
      ru: 'совместные энергетические упражнения',
      en: 'joint energy exercise'
    },
    {
      ru: 'секс ажурный, трепетный, романтичный, любовь во всех ее проявлениях',
      en: 'delicate, timid, romantic sex, love in all its manifestations!'
    }
  ],
  minus: []
}

const beauty = {
  plus: [
    {
      ru: 'чистка кожи, массажи и водные процедуры',
      en: 'skin cleansing, massage, sauna, sunbathing, water treatments'
    },
    {
      ru: 'наращивание ногтей на геле',
      en: 'gel nails extension'
    },
    {
      ru: 'овощи и фрукты, орехи и зелень (сельдерея, пастернака, базилика, петрушки, укропа, листовых салатов и так далее)',
      en: 'vegetables and fruits, nuts and herbs (celery, parsnip, basil, parsley, dill, lettuces, and so on)'
    },
    {
      ru: 'йога и цигун, водные процедуры, прогулки на свежем воздухе',
      en: 'yoga and Chi Kung, walking on the fresh air'
    },
    {
      ru: 'коррективы в спортивную программу, опробирование новшеств, которые пополнят программу в начале следующего лунного цикла',
      en: 'adjustments to the sports program, try some innovations that you may use starting from the next lunar month'
    },
    {
      ru: 'соковый голод',
      en: 'juice fasting'
    },
    {
      ru: 'медитации, дыхательные и энергетические упражнения важнее физических',
      en: 'meditation, breathing and energy exercises are more important than physical activity this day'
    }
  ],
  minus: [
    {
      ru: 'окрашивание волос и бровей',
      en: 'hair and eyebrows coloring'
    }
  ]
}

const business = {
  plus: [
    {
      ru: 'логические завершение лунного месяца и всех его задач',
      en: 'the logical completion of the lunar month and all its tasks'
    },
    {
      ru: 'закупки',
      en: 'purchasing'
    },
    {
      ru: 'командировки',
      en: 'business trips'
    },
    {
      ru: 'анализ результатов за месяц',
      en: 'analysis of the past month results'
    },
    {
      ru: 'меценатство духовных проектов',
      en: 'invest in the spiritual projects'
    }
  ],
  minus: []
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
      ru: 'посев и посадка растений',
      en: 'sowing and planting'
    },
    {
      ru: 'подкормка растений',
      en: 'fertilizing plants'
    },
    {
      ru: 'удобрение почвы',
      en: 'fertilizing the soil'
    }
  ],
  minus: [
    {
      ru: 'пилить деревья, корчевать',
      en: 'cut trees, uproot them'
    },
    {
      ru: 'рвать цветы и растения',
      en: 'pick flowers and plants '
    },
    {
      ru: 'обильный полив',
      en: 'abundant watering '
    },
    {
      ru: 'копать',
      en: 'dig'
    }
  ]
}

const health = {
  plus: [
    {
      ru: 'хирургические операции – голова (глаза и т.д.)',
      en: 'surgical operations – head (eyes, etc.)'
    },
    {
      ru: 'лечение глаз и уход за ними',
      en: 'eyes treatment and care'
    },
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
      ru: 'заготовка фруктов',
      en: 'fruits canning'
    }
  ],
  minus: []
}

const shopping = {
  plus: [
    {
      ru: 'любые покупки – и запланированные, и навеянные ежесекундным порывом; и дорогие, и дешевые',
      en: 'all purchases - planned and spontaneous, expensive, and cheap'
    }
  ],
  minus: [
    {
      ru: 'покупки в кредит',
      en: 'goods on credit'
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
    ru: 'Лотос; Цветок; День Солнца, Всходы растений',
    en: 'Lotus; Flower; Day of the Sun'
  },
  energetics: {
    ru: 'пассивный',
    en: 'passive'
  },
  keywords: {
    ru: 'покой, восстановление связи с божественной сущностью, познание самого себя, внесение света во все сферы жизни, божественная карма',
    en: 'peace, recovery connection with divine essence, self-knowledge, the introduction of light into all areas of life, the divine karma'
  },
  element: {
    ru: 'Вода',
    en: 'Water'
  },
  direction: {
    ru: 'Север',
    en: 'North'
  },
  shape: {
    ru: 'волнистые линии, плавные переходы, ассиметрия',
    en: 'wavy lines, asymmetry'
  },
  stone: {
    ru: 'арагонит, анадалузин, хризопраз',
    en: 'aragonite'
  },
  сolor: {
    ru: 'фиолетовый, лиловый, сиреневый и белый',
    en: 'purple, mauve, lilac and white'
  }
}

export default {
  categories,
  main
}
