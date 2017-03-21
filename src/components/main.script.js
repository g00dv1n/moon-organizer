import Calendar from './Calendar'
import { calculateCalendarHeight } from 'helpers/calculator'

const onDefault = function (self) {
  return function (day) {
    self.$store.commit('SET_LAST_CLICKED_DAY', day)
    self.$router.push({name: 'lunar-day', params: {dayNumber: day.maxLunarDay.number}})
  }
}

export default {
  name: 'main',
  components: {
    Calendar
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
    dayClickHandler () {
      return onDefault(this)
    }
  },
  methods: {},
  mounted () {
    calculateCalendarHeight('calendar-container')
    const type = this.$route.params.category
    this.$store.dispatch('updateType', type)
    this.$material.setCurrentTheme(type)
  }
}

