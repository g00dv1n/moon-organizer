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
      const number = day.maxLunarDay.number
      const type = this.currentType
      return getDayContent(number, this.locale).categories.find(c => c.name === type)
    }
  },
  methods: {
    openModal () {
      this.$refs['modal'].open()
    },
    dayClickHandler () {
      return this.isDefault ? onDefault(this) : onCategory(this)
    }
  },
  mounted () {
    calculateCalendarHeight('calendar-container')
    const type = this.$route.params.category
    this.$store.dispatch('updateType', type)
    this.$material.setCurrentTheme(type)
  }
}

