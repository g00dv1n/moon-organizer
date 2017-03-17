const relationship = {
  plus: [
    {
      ru: 'шаг вперед в отношениях, начало реализации совместных планов',
      en: 'step forward in the relationships, the beginning of the joint plans implementation '
    },
    {
      ru: 'свадьба людей, которые хотят активной жизни',
      en: 'wedding for people who strive to live actively'
    },
    {
      ru: 'секс праздничный, интересный, оригинальный, приветствуются эксперименты',
      en: 'festive, fun, original sex with experiments'
    }
  ],
  minus: []
}

const beauty = {
  plus: [
    {
      ru: 'очищение организма и кожи',
      en: 'body and skin cleansing'
    },
    {
      ru: 'начало диеты, комплекса физических упражнений, курса лечебных масок или смены косметического средства (крема, шампуня, бальзама для волос)',
      en: 'the beginning of the diet, exercising, the course of treatment masks; change of cosmetic products (cream, shampoo, hair balm)'
    },
    {
      ru: 'стрижка (приносит удачу)',
      en: 'haircut (brings luck)'
    },
    {
      ru: 'смена имиджа – обновление гардероба, "примерка" нового макияжа',
      en: 'the change of look – renewing the wardrobe, "trying on" a new makeup'
    },
    {
      ru: 'орехи, сухофрукты, изюм, овощи и свежие фрукты',
      en: 'nuts, dried fruit, raisins, vegetables and fresh fruit'
    }
  ],
  minus: [
    {
      ru: 'алкоголь, никотин, мясо и грубая пищи, полуфабрикаты. Неразборчивое поглощение пищи может вызвать отложение солей и отравление',
      en: 'alcohol, nicotine, meat and rough meal, ready-to-cook food. Indiscriminate food intake can cause deposition of salts, arthritis. A day is fraught with poisoning and unpredictable reaction, even on familiar foods'
    },
    {
      ru: 'пирсинг, удаление родинок, бородавок, вросших ногтей',
      en: 'piercing; moles, warts, ingrown nails removal'
    },
    {
      ru: 'паровые ванны',
      en: 'steam baths'
    }
  ]
}

const business = {
  plus: [
    {
      ru: 'анализ ниши, целевой аудитории',
      en: 'analysis of the niche and the target audience'
    },
    {
      ru: 'благотворительность, поиск источников финансирования, шаг вперед в бизнесе',
      en: 'charity, seeking funding, a step forward in business'
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
      ru: 'посадка и пересадка',
      en: 'planting and transplanting'
    },
    {
      ru: 'посев листовых, зеленых, бахчевых и плодовых культур',
      en: 'planting the leafy, green, melons and fruit plants'
    },
    {
      ru: 'пересадка и посадка кустарников и деревьев',
      en: 'transplanting and planting shrubs and trees'
    },
    {
      ru: 'минеральная подкормка',
      en: 'mineral fertilization'
    },
    {
      ru: 'полив, желательно прикорневой',
      en: 'watering, preferably to the root'
    },
    {
      ru: 'заготовка посадочного материала и его укоренение',
      en: 'preparing planting material and its rooting'
    },
    {
      ru: 'обработка земли',
      en: 'soil treatment'
    },
    {
      ru: 'прививка и перевивка',
      en: 'inoculation and transplantation'
    }
  ],
  minus: [
    {
      ru: 'удаление или укорачивание побегов деревьев и кустарников',
      en: 'removal or shortening of the runners of trees and shrubs'
    }
  ]
}

const health = {
  plus: [
    {
      ru: 'лечение хронических заболеваний, начало курса приема лекарственных препаратов',
      en: 'treatment of the chronic diseases, beginning of the course of medication intake'
    },
    {
      ru: 'начало курса приема витаминных препаратов',
      en: 'beginning of the vitamin intake course'
    },
    {
      ru: 'очистка желудка и кишечника',
      en: 'intestinal cleansing'
    },
    {
      ru: 'консультация у стоматолога, диагностика',
      en: 'consultation with dentist, diagnosis'
    }
  ],
  minus: []
}

const house = {
  plus: [
    {
      ru: 'покупка полезностей, облегчающих быт',
      en: 'purchase the useful things that facilitate everyday life'
    }
  ],
  minus: []
}

const shopping = {
  plus: [
    {
      ru: 'cамое время для полезных покупок – всего, что способствует наиболее эффективному вращению среди социума и делает вашу жизнь легче',
      en: 'it\'s time for useful purchases - everything that contributes to the most efficient existence in the society and makes your life easier'
    }
  ],
  minus: [
    {
      ru: 'безделушки, ненужные вещи в порыве сиюминутного желания',
      en: 'trinkets, useless things in a fit of the momentary desires'
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
    ru: 'Рог изобилия и Ненасытная пасть',
    en: 'Cornucopia and the Insatiable maw'
  },
  energetics: {
    ru: 'пассивный',
    en: 'passive'
  },
  keywords: {
    ru: 'начало действия, принятие даров, умножение добра, ритм',
    en: 'onset of action, acceptance of gifts, multiplication of goods, rhythm'
  },
  element: {
    ru: 'Земля',
    en: 'Earth'
  },
  direction: {
    ru: 'Юго-Запад',
    en: 'Southwest'
  },
  shape: {
    ru: 'квадрат, горизонтальный прямоугольник',
    en: 'square, horizontal rectangle'
  },
  stone: {
    ru: 'жадеин, калцедон, агат переливчатый',
    en: 'iridescent agate'
  },
  сolor: {
    ru: 'оранжевый, каштановый, шоколадный и коричневый',
    en: 'orange, red, and chocolate brown'
  }
}

export {
  categories,
  main
}

