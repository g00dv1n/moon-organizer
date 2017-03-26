const lucky = {
  plus: [
    {
      ru: 'Удачный день! Риск и активные шаги навстречу мечте',
      en: 'Lucky day! Risk and active steps towards the dream'
    }
  ],
  minus: []
}

const relationship = {
  plus: [
    {
      ru: 'свадьба тех, кто давно в отношениях',
      en: 'wedding for those who have been in a relationships for a long time'
    },
    {
      ru: 'попробуйте заняться сексом там, где никогда не занимались, и так, как никогда этого не делали',
      en: 'try to have sex at the absolutely new place, and the way you have never had it'
    }
  ],
  minus: [
    {
      ru: 'развод',
      en: 'divorce'
    }
  ]
}

const beauty = {
  plus: [
    {
      ru: 'очищение от шлаков',
      en: 'cleansing from slags'
    },
    {
      ru: 'аппаратный и вакуумный массажа, массаж шеи',
      en: 'vacuum body massage, neck massage'
    },
    {
      ru: 'уход за кожей лица, питательные маски',
      en: 'skin treatment, moisturizing mask'
    },
    {
      ru: 'покраска волос',
      en: 'hair coloring'
    },
    {
      ru: 'свежая еда, миндаль, фруктовые соки',
      en: 'fresh food, almonds, fruit juices'
    },
    {
      ru: 'увеличение нагрузок на тренировках, предпочтительны активные упражнения, а не статические',
      en: 'raising the bar. Prefer the active exercises to the static ones'
    }
  ],
  minus: [
    {
      ru: 'любование своим отражением в зеркале ',
      en: 'looking in the mirror'
    },
    {
      ru: 'косметические процедуры, кроме очистительных',
      en: 'cosmetic procedures, except for cleansing'
    },
    {
      ru: 'эпиляция',
      en: 'epilation'
    },
    {
      ru: 'голодание',
      en: 'fasting'
    }
  ]
}

const business = {
  plus: [
    {
      ru: 'усиленная работа над начатыми проектами',
      en: 'strengthening work on ongoing projects'
    },
    {
      ru: 'корректировка дел (последний шанс в этом лунном месяце все изменить)',
      en: 'last chance in this lunar month to make adjustments'
    },
    {
      ru: 'организационные вопросы',
      en: 'organizational matters'
    },
    {
      ru: 'упорядочивание документации',
      en: 'putting documentation in order'
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
      ru: 'полив и подкормка',
      en: 'watering and fertilizing'
    },
    {
      ru: 'работа с землей, пересадка, посадка культур',
      en: 'soil treatment, transplanting, planting'
    },
    {
      ru: 'уборка урожая',
      en: 'harvesting'
    }
  ],
  minus: [
    {
      ru: 'обрезка, пикировка, прищипка, прививка и пасынкование растений',
      en: 'pruning, inoculation and breeding the plants'
    }
  ]
}

const health = {
  plus: [
    {
      ru: 'очищение организма',
      en: 'cleansing'
    },
    {
      ru: 'начало курса приема витаминных препаратов',
      en: 'beginning of the vitamin intake course'
    },
    {
      ru: 'сухое голодание',
      en: 'dry fasting'
    }
  ],
  minus: [
    {
      ru: 'пластические операции',
      en: 'plastic surgery'
    }
  ]
}

const house = {
  plus: [
    {
      ru: 'упорядочивание бумаг, документов',
      en: 'put your papers and documents in order'
    },
    {
      ru: 'подготовка целительных препаратов',
      en: 'make the healing drugs'
    }
  ],
  minus: []
}

const shopping = {
  plus: [
    {
      ru: 'приобретение вещи, о которой вы мечтаете уже достаточно давно. Осуществите свою мечту или вообще ничего не покупайте!',
      en: 'purchase the thing that you have dreamed to purchase for a long time. Just do it today or don\'t buy nothing at all'
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
  shopping,
  lucky
}

const main = {
  symbol: {
    ru: 'Труба. Это день призыва',
    en: 'Pipe. The day of Challenge'
  },
  energetics: {
    ru: 'активный',
    en: 'active'
  },
  keywords: {
    ru: 'активность, действенность, уверенность в себе, стремительность, настойчивость, корректировка',
    en: 'activity, efficiency, self-confidence, impetuosity, persistence, adjustment'
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
    ru: 'гиацинт',
    en: 'hyacinth'
  },
  сolor: {
    ru: 'фиолетовый, лиловый, сиреневый и белый',
    en: 'purple, mauve, lilac and white'
  }
}

export default {
  categories,
  main
}
