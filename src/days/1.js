const lucky = {
  plus: [
    {
      ru: 'Удачный день! Cила мысли на пике. Задуманное и запланированное в этот день сильно рискует сбыться :)',
      en: 'Lucky day! The power of thought is at the peak. Everything conceived and planned today will come true very likely'
    }
  ],
  minus: []
}

const relationship = {
  plus: [
    {
      ru: 'беседы и выяснение предпочтений партнеров, планирование общего будущего, поездок, покупок и так далее',
      en: 'talk about partner\'s preferences, plan a common future, joint trips, shopping, etc.'
    }
  ],
  minus: [
    {
      ru: 'cвадьба. Лучше планировать, но не назначать на этот день свадьбу',
      en: 'wedding. It\'s the best day to plan it, but not good for the wedding itself'
    }
  ]
}

const beauty = {
  plus: [
    {
      ru: 'моделирование смены своего образа, выбор новой прически, изучение новых средств ухода и выбор новой косметики',
      en: 'considering the new style, choose a new hairstyle and makeup, explore new skin care routines'
    },
    {
      ru: 'стрижка',
      en: 'haircut'
    },
    {
      ru: 'вегетарианская диета, планирование диеты, очистительных процедур, спортивной программы на месяц вперед ',
      en: 'vegetarian diet; diet, cleansing procedures, and the sports program planning for the month ahead'
    }
  ],
  minus: [
    {
      ru: 'алкоголь, кофе и крепкий чай, мясо, грубя и тяжелая пища',
      en: 'alcohol, coffee, black tea, meat, rough and heavy meal'
    },
    {
      ru: 'физическое переутомление, злоупотребление косметологическими процедурами',
      en: 'physical exhaustion, overindulgence of cosmetic procedures'
    }
  ]
}

const business = {
  plus: [
    {
      ru: 'разработка концепции и стратегии',
      en: 'development of concepts and strategies'
    },
    {
      ru: 'постановка целей',
      en: 'goals setting'
    },
    {
      ru: 'определение требований',
      en: 'requirements definition'
    }
  ],
  minus: []
}
const fishing = {
  plus: [],
  minus: [
    {
      ru: 'клева нет',
      en: 'worst day for fishing'
    }
  ]
}

const garden = {
  plus: [
    {
      ru: 'удаление вредителей, сорняков, больных и засохших растений, ветвей и побегов',
      en: 'removal of pests, weeds, sick and dead plants, branches and runners'
    },
    {
      ru: 'прищипка овощных культур',
      en: 'pruning vegetables'
    },
    {
      ru: 'вырезка побегов дикой поросли',
      en: 'tenderloin of the new wild runners'
    }
  ],
  minus: [
    {
      ru: 'посадка, посев, прививание',
      en: 'plant, sow, inoculate'
    },
    {
      ru: 'окучивание и рыхление земли',
      en: 'hill up plants and hoe the soil'
    }
  ]
}

const health = {
  plus: [
    {
      ru: 'планирование курса лечения, очистительных процедур',
      en: 'planning the treatment course and cleansing procedures'
    }
  ],
  minus: []
}

const house = {
  plus: [
    {
      ru: 'планирование бюджета на месяц, меню, покупок',
      en: 'plan your budget for the month, the menu, shopping dates'
    }
  ],
  minus: []
}

const shopping = {
  plus: [],
  minus: [
    {
      ru: 'любые приобретения, особенно в кредит и в долг',
      en: 'any purchases, especially on credit and debt'
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
  shopping,
  lucky
}

const main = {
  symbol: {
    ru: 'Свеча, Лампада, Светильник, Фонарь, Третий глаз',
    en: 'Candle, Lamp, Third eye'
  },
  energetics: {
    ru: 'активный',
    en: 'active'
  },
  keywords: {
    ru: 'анализ, компромисс, спокойствие, планирование, размышление',
    en: 'analysis, compromise, peace, planning, thinking'
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
    ru: 'волнистые линии, ассиметрия, плавность',
    en: 'wavy lines, asymmetry'
  },
  stone: {
    ru: 'бриллиант, горный хрусталь',
    en: 'diamond, rhinestone'
  },
  сolor: {
    ru: 'красный, алый, черный',
    en: 'red, scarlet, black'
  }
}

export default {
  categories,
  main
}
