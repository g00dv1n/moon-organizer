const relationship = {
  name: 'relationship',
  plus: [
    {
      ru: 'сходите вместе на вечеринку, мероприятие (веселое!), оторвитесь!',
      en: 'visit the big party, cheerful event, have fun!'
    },
    {
      ru: 'cвадьба очень веселая и роскошная',
      en: 'the cheerful and luxurious wedding'
    },
    {
      ru: 'секс - чем больше тем лучше, тантрический, на природе; нельзя сдерживаться; групповой',
      en: 'sex - the more the better, tantric, on the fresh air; don\'t hide your strange desires!'
    }
  ],
  minus: []
}

const beauty = {
  plus: [
    {
      ru: 'ампелотерапия - лечение виноградным соком',
      en: 'ampelotherapy - treatment with the grape juice'
    },
    {
      ru: 'начало занятий в зале - аэробики, фитнеса или любого другого вида занятий в группе',
      en: 'the beginning of aerobic classes, fitness or any other kind of group lessons'
    },
    {
      ru: 'стрижка (привлечет добрых духов)',
      en: 'haircut on this day will draw the kind spirits'
    },
    {
      ru: 'праздничный стол, ритуальное блюдо этого дня, красное вино',
      en: 'festive table, the ritual meal of the day, red wine'
    },
    {
      ru: 'успокоительные массажи, расслабление',
      en: 'soothing massages, relaxation'
    }
  ],
  minus: []
}

const business = {
  plus: [
    {
      ru: 'презентации, рекламные кампании',
      en: 'presentations, advertising campaigns'
    },
    {
      ru: 'увеселительные мероприятия, корпоративы',
      en: 'entertainment events, corporate parties'
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
      ru: 'посадка, посев, сбор урожая',
      en: 'planting, sowing, harvesting'
    },
    {
      ru: 'сбор винограда и виноделие',
      en: 'grape harvesting and wine making'
    },
    {
      ru: 'прополка сорняков',
      en: 'weeding'
    }
  ],
  minus: [
    {
      ru: 'пасынкование, обрезка, прищипка растений',
      en: 'breeding and pruning plants'
    }
  ]
}

const health = {
  plus: [
    {
      ru: 'лечение импотенции и бесплодия',
      en: 'impotence and infertility treatment'
    },
    {
      ru: 'лечение хронических заболеваний, начало курса приема лекарственных препаратов',
      en: 'chronic diseases treatment, beginning of the course of medication intake'
    }
  ],
  minus: []
}

const house = {
  plus: [
    {
      ru: 'организация домашнего праздника, вечеринки',
      en: 'arrange a joyful party at home'
    }
  ],
  minus: []
}

const shopping = {
  plus: [
    {
      ru: 'совершенно любые покупки, особенно игрушки (елочные, детские, розыгрыши, эротические), цветы, коньяк, вино; путевки на отдых и все радостное и праздничное.',
      en: 'any purchases, especially toys (Christmas, erotic, children\'s), flowers, brandy, wine; tickets to vacation and all joyous and festive.'
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
    ru: 'Виноградная гроздь',
    en: 'Grape bunch'
  },
  energetics: {
    ru: 'активная',
    en: 'active'
  },
  keywords: {
    ru: 'отдых, расслабление, радость, веселье, праздник, внутренняя свобода, позитивное восприятие реальности, раскрепощение',
    en: 'rest, relaxation, joy, fun, holiday, inner freedom, positive perception of reality, liberation'
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
    ru: 'квадрат, горизонтальный прямоугольник',
    en: 'square, horizontal rectangle'
  },
  stone: {
    ru: 'гематит, циркон',
    en: 'hematite, zircon'
  },
  сolor: {
    ru: 'желтый, золотой',
    en: 'yellow, gold'
  }
}

export {
  categories,
  main
}
