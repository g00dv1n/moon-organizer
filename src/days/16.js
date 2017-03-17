const relationship = {
  plus: [
    {
      ru: 'совместная ванная, ароматерапия',
      en: 'have the bath together, aromatherapy'
    }
  ],
  minus: [
    {
      ru: 'секс',
      en: 'sex'
    }
  ]
}

const beauty = {
  plus: [
    {
      ru: 'устранение косметических недостатков, удаление бородавок и родинок, пластическе операции',
      en: 'elimination of cosmetic defects, removal of warts and moles, plastic surgery'
    },
    {
      ru: 'уход за лицом и телом, чистки, процедуры аппаратной косметологии',
      en: 'face and body care, cleansing, cosmetology procedures will positively reflect on your appearance'
    },
    {
      ru: 'депиляция; окрашивание, наращивание ногтей',
      en: 'depilation, hair coloring, nail extension'
    },
    {
      ru: 'блюда, сдобренные куркумой или пить молоко, настоянное с куркумой и фенхелем',
      en: 'dishes, spiced with turmeric; milk, infused with turmeric and fennel'
    },
    {
      ru: 'фрукты и овощи, а также простенькие супы и каши из цельного зерна',
      en: 'fruit and vegetables, as well as unpretentious soups and porridge of whole grains'
    },
    {
      ru: 'снижение нагрузки и работа над закреплением уже достигнутых результатов',
      en: 'reducing the load; work on consolidating of the already achieved results'
    },
    {
      ru: 'седативный массаж, йога, растяжка, сидячая медитация',
      en: 'sedative massage, yoga, stretching, meditations'
    }
  ],
  minus: [
    {
      ru: 'голодание',
      en: 'fasting'
    },
    {
      ru: 'рыба и мясо',
      en: 'fish and meat'
    },
    {
      ru: 'спиртные напитки и продукты синтетического происхождения, ненатуральные сладости, грибы',
      en: 'alcoholic drinks and synthetic products, unnatural sweets, mushrooms'
    }
  ]
}

const business = {
  plus: [
    {
      ru: 'составление отчетов',
      en: 'making reports'
    },
    {
      ru: 'установление комфорта и покоя в рабочем коллективе',
      en: 'care of the comfort and peace in the working team'
    },
    {
      ru: 'анализ результатов предыдущих действий',
      en: 'analysis of the previous actions results'
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
      ru: 'рыхление, окучивание грядок',
      en: 'hoeing and hilling'
    },
    {
      ru: 'удобрение почвы',
      en: 'fertilization'
    },
    {
      ru: 'прополка сорняков',
      en: 'weeding'
    },
    {
      ru: 'опрыскивание растений от вредителей',
      en: 'spraying the plants against pests '
    }
  ],
  minus: [
    {
      ru: 'посадка, пасынкование, обрезка, прищипка растений',
      en: 'planting, breeding, pruning plants '
    },
    {
      ru: 'сбор лекарственных растений, т.к. они сегодня не наделены целебными свойствами',
      en: 'picking the medicinal plants, as they haven\'t healing properties now '
    }
  ]
}

const health = {
  plus: [
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
      ru: 'уют и комфорт и все, что им способствует – зажгите аромалампу, свечи, перестелите постель',
      en: 'make your home cozy and comfortable with all that it contributes - aroma lamps, candles, fresh sheets'
    }
  ],
  minus: []
}

const shopping = {
  plus: [
    {
      ru: 'планирование покупки - изучение характеристик желанного товара, отзывов о нем в рекламных проспектах, в Интернете, беседы с экспертами в данной области; или же, при возможности, пробный срок',
      en: 'purchase planning - learn desired characteristics of the goods, read reviews, ask experts in the field; or, if possible, get it for a trial period'
    }
  ],
  minus: [
    {
      ru: 'собственно покупки',
      en: 'all purchases'
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
    ru: 'Бабочка; Голубь; Лестница к Небесам; Душа-Психея',
    en: 'Butterfly; Dove; Stairway to Heaven'
  },
  energetics: {
    ru: 'пассивный',
    en: 'passive'
  },
  keywords: {
    ru: 'спад напряженности, подготовка к полноценному отдыху, нанесение последних штрихов, анализ пройденного пути, установление гармонии между собой и достигнутым результатом',
    en: 'preparation for proper rest, applying the finishing touches, the analysis of the traversed path, establishing harmony between yourself and the result achieved'
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
    ru: 'spinel, tourmaline, emerald, pearl (other than black)',
    en: 'agate, jet'
  },
  сolor: {
    ru: 'оранжевый, каштановый, шоколадный и коричневый; белый, серебристый, голубой',
    en: 'orange and chocolate brown; white, silver, blue'
  }
}

export {
  categories,
  main
}

