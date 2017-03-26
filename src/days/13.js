const relationship = {
  plus: [
    {
      ru: 'свадьба ученых, исследователей, студентов',
      en: 'wedding of the scientists, researchers and students'
    },
    {
      ru: 'секс новаторский, активный, до изнурения, экзотический',
      en: 'innovative, active, exotic sex until exhaustion'
    }
  ],
  minus: []
}

const beauty = {
  plus: [
    {
      ru: 'омоложение кожи, волос, всего организма. Все лекарства, мази и кремы будут действовать сильнее, чем обычно',
      en: 'skin, hair and entire body rejuvenation. All medicines, ointments, and creams will act more strongly than usual'
    },
    {
      ru: 'стрижка изменит в лучшую сторону всю вашу жизнь',
      en: 'haircut will positively change your life'
    },
    {
      ru: 'фрукты, овощи, соки, каши из цельных круп, морепродукты. Это время кулинарных поисков и открытий! Пробовать можно все, но понемногу',
      en: 'fruit and vegetables, juices, cereals from whole grains, seafood. This is a time of culinary explorations and discovery'
    },
    {
      ru: 'групповые тренировки',
      en: 'group exercises'
    },
    {
      ru: 'внесение корректировок в оздоровительные программы, с поправкой на собственное состояние',
      en: 'adjustments in wellness programs, depending on the current state'
    }
  ],
  minus: [
    {
      ru: 'голодание',
      en: 'fasting'
    }
  ]
}

const business = {
  plus: [
    {
      ru: 'внесение корректив в работу и бизнес, рационализация бизнеса',
      en: 'adjustments to the work and business, business rationalization'
    },
    {
      ru: 'установление связей между маленькой и глобальной целью',
      en: 'establish links between a small and a global goal'
    },
    {
      ru: 'строительство круглых объектов',
      en: 'construction of round objects'
    },
    {
      ru: 'командировки',
      en: 'business trips'
    },
    {
      ru: 'изменение привычек',
      en: 'changing habits'
    },
    {
      ru: 'анализ потенциала',
      en: 'capacity analysis'
    },
    {
      ru: 'обучение, чтение специализированной литературы',
      en: 'training, reading the specialized literature'
    },
    {
      ru: 'поиск новых ресурсов',
      en: 'search for new resources'
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
      ru: 'уборка урожая культур, у которых пригодной в пищу является верхняя надземная часть: бобовые, огурцы, томаты, перец, кабачки, баклажаны, кукуруза, подсолнечник, цветы и лекарственные растения',
      en: 'harvest the plants with edible above ground parts: beans, cucumbers, tomatoes, peppers, zucchini, corn, sunflower, flowers and medicinal herbs'
    },
    {
      ru: 'посев, посадка, пересадка, черенкование, укоренение черенков и усов, а так же обработка земли',
      en: 'sowing, planting, transplanting, breeding, rooting of cuttings and runners, soil treatment'
    },
    {
      ru: 'прививка, перепрививка',
      en: 'inoculation'
    },
    {
      ru: 'сбор семян, они дадут хорошие всходы и богатый урожай',
      en: 'seeds picking, they will give a good harvest'
    },
    {
      ru: 'работа с корнями, в этот день они мало реагируют на любые повреждения',
      en: 'work with the roots, they aren\'t sensitive to any damage now'
    },
    {
      ru: 'полив и прикормка',
      en: 'watering and fertilizing'
    }
  ],
  minus: [
    {
      ru: 'обрезка деревьев и прищипка',
      en: 'pruning plants'
    },
    {
      ru: 'уборка ботвы и листвы',
      en: 'haulm and leaves picking'
    }
  ]
}

const health = {
  plus: [
    {
      ru: 'пластические операции, профилакитка и протезирование зубов, косметические процедуры',
      en: 'plastic surgery, dental deseases prevention, getting dentures, cosmetic procedures'
    },
    {
      ru: 'лечение хронических заболеваний, начало курса приема лекарственных препаратов',
      en: 'chronic diseases treatment, beginning of the course of medication intake'
    },
    {
      ru: 'начало курса приема витаминных препаратов',
      en: 'beginning of the vitamin intake course'
    },
    {
      ru: 'очищение печени',
      en: 'liver cleansing'
    }
  ],
  minus: []
}

const house = {
  plus: [
    {
      ru: 'выпечка, особенно круглой формы – пироги, печенья и так далее',
      en: 'baking, especially the round forms - cakes, cookies, etc.'
    },
    {
      ru: 'время кулинарных поисков и открытий',
      en: 'time for the culinary exploration and discovery'
    }
  ],
  minus: []
}

const shopping = {
  plus: [
    {
      ru: 'покупки успешны при условии неспешности выбора, внимания к качеству, консультации с экспертом. Совершайте стильные и оригинальные покупки в этот день',
      en: 'purchase will be successful in case of the deliberate choice, with attention to quality and consultations with an expert. Make stylish and original purchases today!'
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
    ru: 'Колесо; Змея, глотающая свой хвост, Диск',
    en: 'Wheel; the Snake swallowing its own tail'
  },
  energetics: {
    ru: 'активный',
    en: 'active'
  },
  keywords: {
    ru: 'повышение осознанности, установление связи между маленькой и глобальной целью, преодоление эгоизма, дополнительный источник энергии, изменение мнения о себе, коррекция судьбы',
    en: 'raising awareness, establishing a connection between a small and a global goal, selfishness overcoming, an additional source of energy, correction the fate'
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
    ru: 'вертикальный прямоугольник',
    en: 'vertical rectangle'
  },
  stone: {
    ru: 'красный опал, рубин',
    en: 'red opal, ruby'
  },
  сolor: {
    ru: 'синий, индиго, ультрамариновый, васильковый и сапфировый',
    en: 'blue, indigo, ultramarine, cornflower, and sapphire'
  }
}

export default {
  categories,
  main
}
