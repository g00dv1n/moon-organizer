const relationship = {
  plus: [
    {
      ru: 'совместное прохождение тестов, тренинги отношений, консультации',
      en: 'do some tests together, visit the trainings devoted to relationship'
    },
    {
      ru: 'красное вино, неспешный секс в воде',
      en: 'drink red wine, have a leisurely sex in water'
    }
  ],
  minus: [
    {
      ru: 'свадьба',
      en: 'wedding'
    }
  ]
}

const beauty = {
  plus: [
    {
      ru: 'водолечение, ванная с травами',
      en: 'hydrotherapy, bath with herbs'
    },
    {
      ru: 'голод',
      en: 'fasting'
    },
    {
      ru: 'косметические процедуры очищения',
      en: 'cosmetic cleansing procedures'
    },
    {
      ru: 'стрижка порадует, волосы станут гуще',
      en: 'haircut brings delight, the hair become thicker'
    },
    {
      ru: 'окрашивание волос - насыщенный цвет, стойкий',
      en: 'hair coloring. The color will be saturated and resistant'
    },
    {
      ru: 'уход за руками и ногами',
      en: 'hands and feet care'
    },
    {
      ru: 'антицеллюлитный массаж',
      en: 'anti-cellulite massage'
    },
    {
      ru: 'много воды, и чуть молока',
      en: 'lots of water, and a little bit of milk'
    },
    {
      ru: 'упражнения на растягивание',
      en: 'stretching exercises'
    },
    {
      ru: 'расслабляющие массажи, водные процедуры',
      en: 'relaxing massages, water treatments'
    }
  ],
  minus: [
    {
      ru: 'грубая пища, дыня, грибы, соки',
      en: 'rough food, melon, mushrooms, juices'
    }
  ]
}

const business = {
  plus: [
    {
      ru: 'юридические, судебные дела',
      en: 'legal and judicial affairs'
    },
    {
      ru: 'торговые операции, закупка материалов',
      en: 'trading, materials purchasing'
    },
    {
      ru: 'самотестирование, тестирование сотрудников',
      en: 'self-testing, test employees'
    },
    {
      ru: 'полноценный отдых',
      en: 'take a break to rest'
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
      ru: 'посадка и посев культур, дающих корнеплоды: лук, картофель, свекла, бобовые, морковь, репа, редька и т.д.',
      en: 'planting and sowing the plants with edible underground parts: onions, potatoes, beets, beans, carrots, turnip, radish, etc.'
    },
    {
      ru: 'выкопка цветочных луковиц и клубней на хранение',
      en: 'digging up flower bulbs and tubers for storage'
    },
    {
      ru: 'прополка, вспашка, рыхление',
      en: 'weeding and hoeing '
    },
    {
      ru: 'органическая подкормка',
      en: 'organic fertilization'
    },
    {
      ru: 'опрыскивание от вредителей и болезней',
      en: 'spraying against pests'
    },
    {
      ru: 'сушка плодов, трав, корней лекарственных растений',
      en: 'drying fruits, herbs, medicinal plants roots'
    },
    {
      ru: 'благоустройство сада',
      en: 'garden landscaping'
    }
  ],
  minus: [
    {
      ru: 'обильный полив',
      en: 'abundant watering'
    },
    {
      ru: 'работа с корнями, повреждение может привести к гибели растения',
      en: 'work with the roots, damage can lead to death of the plant'
    },
    {
      ru: 'прищипка и пикировка',
      en: 'breeding and nipping'
    }
  ]
}

const health = {
  plus: [
    {
      ru: 'диагностика, удаление, протезирование зубов',
      en: 'dental treatment, teeth removal, getting dentures'
    },
    {
      ru: 'хирургческие операции - сердце, спина, позвоночник',
      en: 'surgical operations – heart, back, spine'
    },
    {
      ru: 'отказ от вредных привычек',
      en: 'getting rid of harmful habits'
    }
  ],
  minus: [
    {
      ru: 'начало приема новых лекарств',
      en: 'beginning of the course of medication intake'
    }
  ]
}

const house = {
  plus: [
    {
      ru: 'накремьте новую обувь',
      en: 'cream the new shoes'
    },
    {
      ru: 'чистка ювелирных изделий',
      en: 'clean the jewelry'
    }
  ],
  minus: []
}

const shopping = {
  plus: [
    {
      ru: 'товары, связанные с морем или просто водой: сувенирные корабли, ракушки, аквариумы с обитателями, надувные бассейны, спасательные жилеты, акваланги или даже простые игрушки для ванны',
      en: 'purchases related to the sea or water: souvenir ships, shells, aquariums with its inhabitants, inflatable pools, life jackets, scuba, or even the toys for the bath'
    },
    {
      ru: 'вещи, призванные восстановить ваше душевное спокойствие -  книги, любые приятные вам мелочи, наборы ароматических масел',
      en: 'things designed to restore your peace of mind - books, aromatic oils sets, and everything that make you calm and happy'
    }
  ],
  minus: []
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
    ru: 'Черепаха, раковина, урна',
    en: 'Turtle, Shell, Urn'
  },
  energetics: {
    ru: 'активный',
    en: 'active'
  },
  keywords: {
    ru: 'апатия, пустота после достижения поставленной задачи, восстановление сил, полноценный отдых, психологическая адаптация',
    en: 'apathy, emptiness after the task completion, strength recovery, proper rest, psychological adaptation'
  },
  element: {
    ru: 'Металл',
    en: 'Metal'
  },
  direction: {
    ru: 'Северо-Запад',
    en: 'Northwest'
  },
  shape: {
    ru: 'круг, спираль',
    en: 'circle, spiral'
  },
  stone: {
    ru: 'шпаты (обереги), тигровый (рыжий) глаз, соколиный (голубой и синий) глаз, кошачий (зеленый) глаз',
    en: 'spars (amulets), brindle (red) eye, falcon (blue) eyes, cat (green) eye'
  },
  сolor: {
    ru: 'зеленый, малахитовый и изумрудный',
    en: 'green, malachite and emerald'
  }
}

export {
  categories,
  main
}
