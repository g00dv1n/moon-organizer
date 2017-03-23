import Calendar from './Calendar'
import { calculateCalendarHeight } from 'helpers/calculator'
import CategoryModal from './CategoryModal'
import getDayContent from 'helpers/daypicker'

const onDefault = function (self) {
  return function (day) {
    self.$store.commit('SET_LAST_CLICKED_DAY', day)
    self.$router.push({name: 'lunar-day', params: {dayNumber: day.maxLunarDay.number}})
  }
}

const onCategory = function (self) {
  const modal = self.$refs['modal']
  return function (day) {
    self.$store.commit('SET_LAST_CLICKED_DAY', day)
    modal.open()
  }
}

const extractContentByDayObject = function (type, locale, day) {
  const number = day.maxLunarDay.number
  console.log('DAY NUMBER: ' + number)
  return getDayContent(number, locale).categories.find(c => c.name === type)
}

const isColored = function (type, locale) {
  return function (day) {
    const category = extractContentByDayObject(type, locale, day)
    return category && category.plus.length > 0 && category.minus.length === 0
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
    locale () {
      return this.$store.state.locale
    },
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

      return extractContentByDayObject(this.currentType, this.locale, day)
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
    calculateCalendarHeight('calendar-container')
    const type = this.$route.params.category || 'default'
    this.$store.dispatch('updateType', type)
    this.$material.setCurrentTheme(type)
  }
}

