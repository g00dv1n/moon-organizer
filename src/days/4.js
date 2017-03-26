const relationship = {
  plus: [
    {
      ru: 'анализ своего поведения, партнер – это зеркало, разговор о недостатках',
      en: 'analysis of the self-behavior, the partner is your mirror now. Talk about each other with each other sincerely'
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
      ru: 'процедуры, связанные с питанием, уходом, прогулки на свежем воздухе',
      en: 'procedures related to nutrition, care, walking outdoors'
    },
    {
      ru: 'маски очищающего действия',
      en: 'cleansing masks'
    },
    {
      ru: 'педикюр - ноги будут избавлены от мозолей и натоптышей на долгое время',
      en: 'pedicure - the feet will be spared from calluses and corns for a long time'
    },
    {
      ru: 'окрашивание седых волос',
      en: 'coloring gray hair'
    },
    {
      ru: 'стрижка детей',
      en: 'children haircut'
    },
    {
      ru: 'тушеные овощи и салаты. Еда в этот период должна быть сытной, но без излишеств',
      en: 'steamed vegetables and salads. The food at this time should be nourishing, but with no frills'
    },
    {
      ru: 'травяные чаи из седативных трав, например, мелисы, ромашки и мяты',
      en: 'herbal teas and sedative herbs, such as melissa, chamomile, and mint'
    },
    {
      ru: 'сеансы целительных медитаций и глубинных релаксаций',
      en: 'sessions of healing meditation and deep relaxation'
    }
  ],
  minus: [
    {
      ru: 'продукты, которые могут вызвать аллергию или нежелательные реакции, продукты неестественной происхождения, новые в рационе',
      en: 'the products that may cause allergic reactions or unnatural products that you have never eaten before'
    },
    {
      ru: 'стрижка',
      en: 'haircut'
    },
    {
      ru: 'отлынивание от тренировки',
      en: 'stop workouts'
    },
    {
      ru: 'приступление к разучиванию новых движений или техник, стремление поставить рекорд. Полезно сделать маленький шаг назад и хорошо отработать уже привычные упражнения',
      en: 'start learning the new movements and techniques, strive to put the record'
    }
  ]
}

const business = {
  plus: [
    {
      ru: 'анализ статистики',
      en: 'stats analysis'
    },
    {
      ru: 'сбор отзывов пользователей',
      en: 'customer feedback analysis'
    },
    {
      ru: 'сбор жалоб и предложений персонала, сотрудников',
      en: 'collecting employees\' complaints and suggestions'
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
      ru: 'посадка, посев и пересадка',
      en: 'plant, sow and transplant'
    },
    {
      ru: 'внесение прикормок',
      en: 'make a groundbait'
    },
    {
      ru: 'заготовка черенков, прививание',
      en: 'prepare the cuttings, inoculation'
    },
    {
      ru: 'полив, причем очень обильный. Также это относится и к компостным кучам',
      en: 'water, water, water! And the compost heaps'
    },
    {
      ru: 'сбор плодов, особенно тех, которые растут над поверхностью',
      en: 'harvest the fruits, especially those that grow above the surface'
    }
  ],
  minus: [
    {
      ru: 'обрезка растений',
      en: 'pruning plants'
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
  minus: []
}

const house = {
  plus: [
    {
      ru: 'спросите у домочадцев и себя самих, что можно улучшить в Вашем доме, чего не хватает',
      en: 'ask your family and yourself, what could be improved in your home, and what is missing'
    }
  ],
  minus: []
}

const shopping = {
  plus: [
    {
      ru: 'предметы гигиены',
      en: 'hygiene products'
    }
  ],
  minus: [
    {
      ru: 'любые другие покупки, особенно дорогостоящие',
      en: 'all other purchases, especially expensive ones'
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
    ru: 'Древо Познания, выбор между добром и злом',
    en: 'Tree of Knowledge, the choice between good and evil'
  },
  energetics: {
    ru: 'пассивный',
    en: 'passive'
  },
  keywords: {
    ru: 'информация, умение адекватно реагировать, выбор, анализ текущей ситуации',
    en: 'information, the ability to respond adequately, selection, analysis of the current situation'
  },
  element: {
    ru: 'Дерево',
    en: 'Wood'
  },
  direction: {
    ru: 'Юго-Восток',
    en: 'Southeast'
  },
  shape: {
    ru: 'вытянутый вертикально прямоугольник',
    en: 'vertical rectangle'
  },
  stone: {
    ru: 'сардоникс, амазонит (приносит в дом радость), зеленый нефрит',
    en: 'onyx, amazonite (brings joy to home), green jade'
  },
  сolor: {
    ru: 'зеленый, малахитовый и изумрудный',
    en: 'green, malachite and emerald'
  }
}

export default {
  categories,
  main
}
