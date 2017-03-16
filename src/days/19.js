const relationship = {
  name: 'relationship',
  plus: [
    {
      ru: 'развод, разрыв отягощающих отношений',
      en: 'Divorce, break the aggravating relations'
    }
  ],
  minus: [
    {
      ru: 'конфликтный день. Не принимайте необдуманных заранее решений',
      en: 'day may be full of conflicts. Do not make hasty decisions'
    },
    {
      ru: 'свадьба',
      en: 'wedding'
    },
    {
      ru: 'любой секс станет насилием',
      en: 'sex, may end with the violence'
    }
  ]
}

const beauty = {
  plus: [
    {
      ru: 'картофель, капуста, репа, свекла и другие овощи округлой формы',
      en: 'potatoes, cabbage, turnips, beets and other rounded shape vegetables'
    },
    {
      ru: 'маникюр, покраска волос, химическая завивка, стрижка - волосы будут слегка завиваться крупными локонами, приобретут дополнительный объем и блеск',
      en: 'manicure, haircut, coloring, perms. Hair will get an extra volume and shine'
    },
    {
      ru: 'массаж или сауна',
      en: 'massage or sauna'
    },
    {
      ru: 'чем проще будет диета, тем лучше',
      en: 'the easier the diet, the better'
    },
    {
      ru: 'медитации',
      en: 'meditation'
    }

  ],
  minus: [
    {
      ru: 'кабачки, огурцы, морковь и другие овощи удлиненной формы',
      en: 'courgettes, cucumbers, carrots and other elongated vegetables'
    },
    {
      ru: 'спортивные тренировки, насекомые на природе, травяные ванны',
      en: 'trainings, insects and herbal baths'
    }
  ]
}

const business = {
  plus: [
    {
      ru: 'генеральная уборка: в офисе, среди задач и персонала. Избавление от ненужного',
      en: 'general cleaning: in the office, among the tasks and staff. All unnecessary throw away'
    },
    {
      ru: 'разграничение своих истинных мыслей и навязанных, самокоучинг',
      en: 'differentiation of the true and imposed thoughts, self-coaching'
    },
    {
      ru: 'расстановка приоритетов',
      en: 'prioritization'
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
      ru: 'обрезка растений с целью замедления роста молодых побегов',
      en: 'pruning plants with the aim of slowing the growth of young runners'
    },
    {
      ru: 'прививка, прополка и прореживание',
      en: 'inoculation, weeding and thinning'
    },
    {
      ru: 'выкапывание луковиц и клубней',
      en: 'digging up bulbs and tubers'
    },
    {
      ru: 'корневая органическая подкормка',
      en: 'organic fertilizing'
    },
    {
      ru: 'полив, опрыскивание от вредителей и сорняков',
      en: 'watering, spraying against pests and weeds'
    }
  ],
  minus: [
    {
      ru: 'любые работы с использованием садового инвентаря',
      en: 'any work with using the garden tools'
    }
  ]
}

const health = {
  plus: [],
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
      ru: 'размусоривание',
      en: 'decluttering'
    },
    {
      ru: 'мытье холодильника',
      en: 'wash the refrigerator'
    }
  ],
  minus: [
    {
      ru: 'работа с огнем, острыми и тяжелыми предметами, снимать паутину',
      en: 'work with fire, sharp and heavy objects, remove the spider web'
    }
  ]
}

const shopping = {
  plus: [
    {
      ru: 'приобретение домашних любимцев',
      en: 'pets acquisition'
    }
  ],
  minus: [
    {
      ru: 'любые другие, в том числе продукты питания',
      en: 'all other, including food'
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
    ru: 'Паук, сеть, золотой паук, паук Рахна',
    en: 'Spider, Web, Gold Spider'
  },
  energetics: {
    ru: 'активный',
    en: 'active'
  },
  keywords: {
    ru: 'повышенный самоконтроль, опасность получить травмы, проверка усвоения прошлых лунных уроков, преобразование своих негативных качеств в положительные, время освобождения от всего ненужного, наведение порядка',
    en: 'an increased self-control, a danger of injury, check the assimilation of the past "lunar" lessons, transform the negative qualities into positive ones, the liberation of all unnecessary, restoring an order'
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
    ru: 'лабрадор, хризолит, оливин, зеленый гранат, уварит, красный оникс',
    en: 'olivine, green garnet, red onyx'
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
