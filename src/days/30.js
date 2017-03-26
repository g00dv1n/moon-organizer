const relationship = {
  plus: [
    {
      ru: 'устройте себе тихий праздник и отдых, валяйтесь в постели целый день, подбейте итоги месяца',
      en: 'arrange a peaceful holiday and relaxation time for yourself. Be lazy all day, sum up the lunar month results'
    }
  ],
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
      ru: 'расслабление, успокоительные процедуры, обдумывание новых косметических курсов',
      en: 'relaxing, soothing treatments; considering the new cosmetic courses'
    },
    {
      ru: 'стрижка надолго сохранит первозданную форму, волосы медленно отрастают',
      en: 'haircut from this day will keep its original look for a long time'
    },
    {
      ru: 'массаж, травяная ванная, расслабиться в тишине',
      en: 'massage, herbal bath, relax in the silence'
    },
    {
      ru: 'легкая еда, употребление овощей и кисло-сладких фрукто',
      en: 'light food, no meat, no rough. More vegetables and sour-sweet fruits'
    },
    {
      ru: 'отдых от тренировок, медитации',
      en: 'a break from exercises, meditate, get the relaxing massage'
    }
  ],
  minus: []
}

const business = {
  plus: [
    {
      ru: 'возвращение долгов',
      en: 'pay off the debts'
    },
    {
      ru: 'подбивание итогов',
      en: 'sum up the results'
    },
    {
      ru: 'поиск, изготовление талисмана',
      en: 'find (or make) your mascot'
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
      ru: 'полив',
      en: 'watering'
    },
    {
      ru: 'легкое рыхление',
      en: 'slight hoeing'
    }
  ],
  minus: [
    {
      ru: 'посев и посадка любых растений',
      en: 'sowing and planting any plants'
    },
    {
      ru: 'прививка',
      en: 'inoculation'
    }
  ]
}

const house = {
  plus: [],
  minus: [
    {
      ru: 'уборка, стирка, любые другие домашние хлопоты',
      en: 'cleaning, laundry, any other household chores'
    }
  ]
}

const shopping = {
  plus: [
    {
      ru: 'покупки на подарок кому-то',
      en: 'gifts to someone'
    }
  ],
  minus: [
    {
      ru: 'покупки для себя',
      en: 'purchases for yourself'
    }
  ]
}

const categories = {
  relationship,
  beauty,
  business,
  fishing,
  garden,
  house,
  shopping
}

const main = {
  symbol: {
    ru: 'Золотой Лебедь',
    en: 'The Golden Swan'
  },
  energetics: {
    ru: 'пассивный',
    en: 'passive'
  },
  keywords: {
    ru: 'завершение, отдых, восстановление сил, альтруизм, любовь и гармония',
    en: 'the end, rest, recovery of strength, altruism, love and harmony'
  },
  element: {
    ru: 'Дерево',
    en: 'Wood'
  },
  direction: {
    ru: 'Восток',
    en: 'East'
  },
  shape: {
    ru: 'вертикальный прямоугольник',
    en: 'vertical rectangle'
  },
  stone: {
    ru: 'белый коралл, горный хрусталь и турмалин',
    en: 'white coral, rock crystal and tourmaline'
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
