// @flow

import Calendar from './Calendar.vue'
import { calculateCalendarHeight } from '../helpers/calculator'
import CategoryModal from './CategoryModal.vue'
import { mapGetters } from 'vuex'

const onDefault = function (self: Object): Function {
  return function (day: Day): void {
    self.$store.commit('SET_LAST_CLICKED_DAY', day)
    self.$router.push({name: 'lunar-day', params: {dayNumber: day.showedLunarDay.number}})
  }
}

const onCategory = function (self: Object): Function {
  const modal = self.$refs['modal'] || document.getElementById('modal')
  return function (day: Day): void {
    self.$store.commit('SET_LAST_CLICKED_DAY', day)
    if (modal) {
      modal.open()
    } else {
      throw new Error('Cannot get modal !>?')
    }
  }
}

const extractCategoryContentByDayObject = function (type: string, locale: string, day: Day): ?Category {
  const {categories} = day.content
  return categories ? categories.find(c => c.name === type) : null
}

const isColored = function (type: string, locale: string): Function {
  return function (day: Day): boolean {
    const category = extractCategoryContentByDayObject(type, locale, day)
    return !!category && category.plus.length > 0 && category.minus.length === 0
  }
}

export default {
  name: 'main',
  components: {
    Calendar,
    CategoryModal
  },
  data () {
    return {}
  },
  computed: {
    ...mapGetters(['locale']),
    geo () {
      return this.$store.state.geo
    },
    currentType () {
      return this.$store.state.currentType
    },
    isDefault () {
      return this.currentType === 'default'
    },
    constants () {
      return this.$store.getters.constants
    },
    title () {
      const day = this.$store.state.lastClickedDay
      if (!day || this.isDefault) return null
      const number = day.maxLunarDay.number
      return `${number} ${this.constants['moonDay']}`
    },
    category () {
      const day = this.$store.state.lastClickedDay
      if (!day || this.isDefault) return null

      return extractCategoryContentByDayObject(this.currentType, this.locale, day)
    }
  },
  methods: {
    openModal () {
      this.$refs['modal'].open()
    },
    dayClickHandler () {
      return this.isDefault ? onDefault(this) : onCategory(this)
    },
    isColoredHandler () {
      const VIEWED_TYPES = ['lucky', 'fishing']
      return VIEWED_TYPES.includes(this.currentType) ? isColored(this.currentType, this.locale) : () => false
    }
  },
  mounted () {
    const resizeEl = 'calendar-container'
    calculateCalendarHeight(resizeEl)
    window.onresize = () => {
      calculateCalendarHeight(resizeEl)
    }
    const EnjoyHint = window.EnjoyHint

    const enjoyhint = new EnjoyHint({})

    const steps = [
      {
        'next .logo': 'Вас приветствует Лунный Календарь!<br/> Позвольте нам рассказать о том, как он устроен',
        'shape': 'circle',
        'nextButton': {className: 'next-btn', text: 'Хорошо!'},
        'skipButton': {className: 'skip-btn', text: 'Пропустить'}
      },
      {
        'click .cell': 'Нажмите левой клавишей мыши на дне,<br/> чтобы узнать о нем больше',
        'showSkip': false
      },
      {
        'next .day-title': 'Листайте вниз, чтобы прочесть<br/> все советы на этот день',
        'nextButton': {className: 'next-btn', text: 'Хорошо!'},
        'showSkip': false
      },
      {
        'next .pre-last': '<div style="font-size: 18px;">Со знаком "+" - то, чему Луна<br/> благоволит, "-" - то, что лучше<br/> отложить на другой день</div>',
        'nextButton': {className: 'next-btn', text: 'Понятно'},
        'showSkip': false
        // 'skipButton': {className: 'empty-btn', text: 'empty'}
        // 'scrollAnimationSpeed': 1500

      },
      {
        'click .md-button.md-theme-default.md-primary.category:nth-child(2)': '<div>Выберите календарь на интересующую Вас тему,<br/> чтобы получить советы только по ней</div>',
        'nextButton': {className: 'next-btn', text: 'Хорошо!'},
        'showSkip': false
      },
      {
        /* selector: '.month-changer:nth-child(2)',
         selector: 'logo',
         event: 'click',
         description: '<div>Переходите на предыдущий или следующий месяц,<br/> нажимая на стрелках</div>', */
        'click .glyphicon-arrow-right.month-changer': '<div>Переходите на предыдущий или следующий месяц,<br/> нажимая на стрелках</div>',
        'showSkip': false
      },
      {
        'click .cell': 'Нажмите на дне, чтобы<br/> получить советы на него по выбранной Вами теме',
        'timeout': 500,
        'showSkip': false
      },
      {
        'click #modal-ok': '',
        'showSkip': false
      },
      {
        'click .md-button.md-primary.category:nth-child(1)': '<div>Чтобы вернуться на общий календарь, нажмите сюда</div>',
        'nextButton': {className: 'next-btn', text: 'Хорошо!'},
        'showSkip': false
      },
      {
        'next .logo': 'Вот и все! Приятного использования!',
        'shape': 'circle',
        'nextButton': {className: 'next-btn', text: 'Спасибо!'},
        'showSkip': false
      }
    ]

    enjoyhint.set(steps)

    enjoyhint.run()
  }
}

