const relationship = {
  plus: [
    {
      ru: 'расскажите, как и за что вы благодарны партнеру',
      en: 'tell the partner how grateful you are to him/her, and for what exactly'
    },
    {
      ru: 'помогите любимому, пожалейте, будьте особенно заботливы сегодня',
      en: 'help your loved one, be very attentive today'
    },
    {
      ru: 'свадьба',
      en: 'wedding'
    },
    {
      ru: 'секс максимально духовный',
      en: 'spiritual, exalted sex'
    }
  ],
  minus: []
}

const beauty = {
  plus: [
    {
      ru: 'начало курса ампелотерапии (лечения виноградом или виноградным соком) и сокотерапии - показаны все овощные и фруктовые соки, за исключением яблочного',
      en: 'the ampelotherapy (treatment with grapes or grape juice) and juice therapy - all the vegetable and fruit juices, with the exception of cider'
    },
    {
      ru: 'много питья, увлажняющие процедуры для кожи',
      en: 'a lot of drinking, skin moisturizing'
    },
    {
      ru: 'орехи, семечки, овощи',
      en: 'nuts, seeds, vegetables'
    },
    {
      ru: 'психофизические практики, йога и цигун',
      en: 'psychophysical practices, yoga, and Chi Kung'
    },
    {
      ru: 'массаж, сеансы ароматерапии и групповой медитации, проработка сердечной чакры, селезенки',
      en: 'massage, aromatherapy and group meditation, work with the heart chakra, the spleen'
    },
    {
      ru: 'активные упражнения должны быть уравновешены растягивающими и расслабляющими элементами',
      en: 'active exercises must be balanced by stretching and relaxing elements'
    }
  ],
  minus: [
    {
      ru: 'мясо, никотин, алкоголь, яйца, рыба',
      en: 'meat, nicotine, alcohol, eggs, fish'
    }
  ]
}

const business = {
  plus: [
    {
      ru: 'спонсорство духовных и волонтерских организаций, благотворительность',
      en: 'sponsorship of religious and volunteer organizations, charity'
    },
    {
      ru: 'расстановка приоритетов',
      en: 'prioritization'
    },
    {
      ru: 'поощрение сотрудников',
      en: 'encouraging employees'
    },
    {
      ru: 'проведение акций, скидок, подарков',
      en: 'offer discounts, gifts to the customers'
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
      ru: 'уборка урожая плодов, которые не предназначены для зимних заготовок',
      en: 'harvesting fruit plants that are not intended for the canning'
    },
    {
      ru: 'посадка, посев, пересадка зелени, плодовых, бахчевых культур, листовых овощей, ягодных кустарников, клубники, плодовых деревьев',
      en: 'planting, sowing, transplanting herbs, melons, leafy vegetables, berry bushes, strawberries, fruit trees'
    },
    {
      ru: 'обработка земли, обрезка, черенкование, укоренение клубничных и других усов, пасынкование, прореживание, сбор семян, обрезка, прищипка, пикирование',
      en: 'soil treatment, pruning, rooting of strawberry and other runners, breeding, thinning, seeds picking'
    }
  ],
  minus: [
    {
      ru: 'обрезка плодовых деревьев, т.к. растения могут истечь соком и погибнуть',
      en: 'pruning the fruit trees may lead to their death'
    }
  ]
}

const health = {
  plus: [
    {
      ru: 'лечение хронических заболеваний, начало курса приема лекарственных препаратов',
      en: 'chronic diseases treatment, beginning of the course of medication intake'
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
      ru: 'подарки близким',
      en: 'make gifts to the loved ones'
    },
    {
      ru: 'волонтерство – отдайте нуждающимся не нужную вам одежду, игрушки',
      en: 'give your old clothes and toys to somebody who really need it'
    }
  ],
  minus: []
}

const shopping = {
  plus: [
    {
      ru: 'книги по духовному развитию -  священные тексты, такие как Коран, Библия; трактаты по психологии',
      en: 'books devoted to the spiritual development - the sacred texts such as the Quran, the Bible; treatises on psychology, etc.'
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
    ru: 'Магическая Чаша, Череп, Сердце, Чаша Грааля',
    en: 'Magic Bowl, Heart, Grail'
  },
  energetics: {
    ru: 'пассивный',
    en: 'passive'
  },
  keywords: {
    ru: 'встреча со своей истинной природой, выбор между материальным миром и духовным, достижение чувства единения со Вселенной, альтруистическая деятельность, благодарность, мудрость, восстановление взаимопонимания',
    en: 'meeting with your true nature, the choice between the material world and the spiritual, a sense of unity with the universe, altruistic activities, gratitude, wisdom'
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
    ru: 'вертикальный прямоугольник',
    en: 'vertical rectangle'
  },
  stone: {
    ru: 'лазурит, желтый коралл, перламутр, розовый жемчуг',
    en: 'lapis lazuli, yellow, coral, pink pearl'
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

