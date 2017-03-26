const relationship = {
  plus: [
    {
      ru: 'свадьбы экстремалов',
      en: 'wedding for the adventurers'
    },
    {
      ru: 'секс экстремальный, в необычной обстановке и позах',
      en: 'extreme sex in unusual circumstances and positions'
    }
  ],
  minus: []
}

const beauty = {
  plus: [
    {
      ru: 'баня, сауна',
      en: 'bath, sauna'
    },
    {
      ru: 'стрижка (к богатству), покраска, укладка, завивка',
      en: 'haircut (brings wealth), hair coloring, styling, perming'
    },
    {
      ru: 'восточные единоборства',
      en: 'martial arts'
    },
    {
      ru: 'курсы массажа',
      en: 'massage courses'
    },
    {
      ru: 'блюда с большим количеством горячих специй (чили, черный перец, имбирь, гвоздика, горчица, хрен, чеснок, асафетида, базилик, корица и тому подобные), мясо «активных» животных, например, барана, но ни в коем случае не говядина (мясо "медленного" животного)',
      en: 'dishes with lots of hot spices (chili, black pepper, ginger, cloves, mustard, horseradish, garlic, basil, cinnamon etc.), the meat of "active" animals, such as sheep, but no beef (because this is the meat of "slow" animal)'
    },
    {
      ru: 'активные физические нагрузки, комплексы на уравновешивание внутренних энергий (цигун). Завершение тренировки сеансами успокаивающего массажа или медитации',
      en: 'active physical load, exercises to balance the internal energy (Chi Kung). Complete the workout with a soothing massage or meditation'
    }
  ],
  minus: [
    {
      ru: 'очистительные практики',
      en: 'cleansing practices'
    }
  ]
}

const business = {
  plus: [
    {
      ru: 'путешествия, строительство',
      en: 'traveling, construction'
    },
    {
      ru: 'самые трудные задачи',
      en: 'the most difficult tasks'
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
      ru: 'посадка, пересадка и посев быстрорастущих плодовых культур, особенно тех, у которых наземная часть съедобна (листовые овощи, бобы, баклажаны, огурцы, кабачки, тыква, томаты, кукуруза, патиссоны, горох, зелень, перец, капуста, земляника, подсолнечник и т.д.)',
      en: 'planting, transplanting of fast-growing fruit plants, especially those that above ground part is edible (leafy vegetables, beans, eggplants, cucumbers, zucchini, tomatoes, corn, peas, greenery, peppers, cabbage, strawberries, sunflowers, etc.)'
    },
    {
      ru: 'посадка, пересадка, посев цветочных культур, газонных и лекарственных растений',
      en: 'planting, transplanting the flowers and medicinal plants'
    },
    {
      ru: 'рыхление, прополка, минеральная подкормка, прореживание всходов',
      en: 'hoeing, weeding, mineral fertilizing, thinning the seedlings'
    },
    {
      ru: 'нарезка черенков, их подготовка к укоренению и укоренение, прививка',
      en: 'slicing the cuttings, preparing them for rooting and rooting, inoculation'
    },
    {
      ru: 'сбор плодов',
      en: 'harvesting the fruit'
    }
  ],
  minus: []
}

const health = {
  plus: [
    {
      ru: 'лечение костей и суставов',
      en: 'bones and joints treatment'
    },
    {
      ru: 'лечение зубов',
      en: 'dental treatment'
    },
    {
      ru: 'начало курса приема витаминных препаратов',
      en: 'beginning of the vitamins intake course'
    }
  ],
  minus: [
    {
      ru: 'очистительные процедуры',
      en: 'cleansing procedures'
    }
  ]
}

const house = {
  plus: [
    {
      ru: 'заготовка полуфабрикатов',
      en: 'prepare semi finished goods'
    },
    {
      ru: 'пересадка комнатных растений',
      en: 'transplant the houseplants'
    }
  ],
  minus: []
}

const shopping = {
  plus: [
    {
      ru: 'наборы столовых предметов, инвентарь для работы в саду, все, что может подразумевать несколько «агрессивное» применение',
      en: 'sets of dishes, tools for working in the garden, all that can mean some "aggressive" utilization'
    }
  ],
  minus: [
    {
      ru: 'любые другие покупки. Возможны проблемы с качеством таких приобретений, будьте внимательны',
      en: 'all other purchases. Probable problems with the quality of acquisitions, be careful'
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
    ru: 'Снежный барс, готовящийся к прыжку',
    en: 'Snow Leopard, prepared to jump'
  },
  energetics: {
    ru: 'активный',
    en: 'active'
  },
  keywords: {
    ru: 'повышенный энергетический тонус, осторожность, самоконтроль, одиночная работа',
    en: 'increased energy tone, caution, self-control, work'
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
    ru: 'вытянутый вертикально прямоугольник',
    en: 'vertical rectangle'
  },
  stone: {
    ru: 'джеспилит, рубин, пирит, авантюрин',
    en: 'ruby, pyrite, aventurine'
  },
  сolor: {
    ru: 'желтый, золотой, янтарный, лимонный, шафранный и охра',
    en: 'yellow, gold, amber, lemon, saffron and ocher'
  }
}

export default {
  categories,
  main
}
