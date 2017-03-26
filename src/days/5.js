const relationship = {
  plus: [
    {
      ru: 'любые перемены',
      en: 'any changes'
    },
    {
      ru: 'свадьба для тех, кто любит постоянные перемены',
      en: 'wedding for those who love the constant changes'
    },
    {
      ru: 'секс простой, расслабляющий, спокойный, целительный',
      en: 'simple, relaxing, calm, healing sex'
    }
  ],
  minus: []
}

const beauty = {
  plus: [
    {
      ru: 'заготовка лекарственных трав и приготовление сборов, настоев и притираний. Травы, собранные в этот день, обладают особенной лечебной силой',
      en: 'harvesting medicinal herbs, tinctures and ointments making. The herbs gathered on this day, have special healing power'
    },
    {
      ru: 'много воды, молоко и творог, вегетарианские блюда',
      en: 'water, milk, cheese, vegetarian dishes'
    },
    {
      ru: 'увеличение физических нагрузок ',
      en: 'physical load increasing'
    }
  ],
  minus: [
    {
      ru: 'стрижка волос - может увеличить глазное давление, что приведет к ухудшению зрения',
      en: 'haircut can increase eye pressure and lead to the vision loss'
    },
    {
      ru: 'консервированные продукты, соленые и квашеные овощи ',
      en: 'canned foods, salted and pickled vegetables'
    },
    {
      ru: 'голодание и очистка',
      en: 'fasting and cleansing'
    }
  ]
}

const business = {
  plus: [
    {
      ru: 'реорганизация существующих проектов',
      en: 'the reorganization of existing projects'
    },
    {
      ru: 'применение новых методов в работе',
      en: 'application of new methods in work'
    },
    {
      ru: 'перестановка в офисе, ремонт',
      en: 'rearrange, repair in the office'
    },
    {
      ru: 'интеграция',
      en: 'integration'
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
      ru: 'посадка и пересадка, т.к. корни преимущественно насыщены питательными веществами',
      en: 'plant and transplant - the roots mostly full of nutrients'
    },
    {
      ru: 'высадка рассады, она будет лучше приниматься',
      en: 'plant the seedlings, she will be better accepted'
    },
    {
      ru: 'прививание, поливать и подкармливать под корень, потому что корневая система растений скорее вбирает и удерживает влагу',
      en: 'inoculation, water at the root because the root system of plants faster absorbs and retains moisture'
    },
    {
      ru: 'пасынкование, прищипка и обрезка растений',
      en: 'pruning plants'
    },
    {
      ru: 'сбор урожая, но только тех культур, у которых пригодна в пищу надземная часть (перец, кабачки, фрукты, зелень, томаты и др.)',
      en: 'harvest, but only those plants that have edible above ground part (peppers, zucchini, fruit, greens, tomatoes, etc )'
    }
  ],
  minus: [
    {
      ru: 'пересадка плодовых растений и кустарников',
      en: 'transplant fruit plants and shrubs'
    },
    {
      ru: 'обрезка плодовых деревьев и кустарников',
      en: 'pruning the fruit trees and shrubs'
    }
  ]
}

const health = {
  plus: [
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
  minus: [
    {
      ru: 'голодание и очистка',
      en: 'fasting and cleansing'
    }
  ]
}

const house = {
  plus: [
    {
      ru: 'наведение порядка в шкафах, упорядочивание вещей, продумывание систем хранения',
      en: 'bring order to your closets, organize the storage systems'
    },
    {
      ru: 'перестановка мебели',
      en: 'rearrange the furniture'
    },
    {
      ru: 'любая реорганизация быта',
      en: 'reorganize your home and life'
    }
  ],
  minus: []
}

const shopping = {
  plus: [
    {
      ru: 'все что угодно – от бытовых мелочей до недвижимости',
      en: 'anything - from household trifles to the real estate'
    },
    {
      ru: 'обмен товара с браком, бартер',
      en: 'exchange of goods with the defects, barter'
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
    ru: 'Единорог, Кабан роющий землю, Вепрь, Лампада с маслом',
    en: 'Unicorn, wild Boar digging the earth, Lamp with oil'
  },
  energetics: {
    ru: 'активный',
    en: 'active'
  },
  keywords: {
    ru: 'трансформация, изменения, интегрирование, объединение, увеличение нагрузки',
    en: 'transformation, modification, integration, association, increasing load'
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
    ru: 'бирюза, розовый халцедон, мрамор',
    en: 'turquoise, pink chalcedony, marble'
  },
  сolor: {
    ru: 'голубой, морской волны и лазоревый',
    en: 'blue, aqua and azure'
  }
}

export default {
  categories,
  main
}
