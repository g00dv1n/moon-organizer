import Calendar from './Calendar'
import { calculateCalendarHeight } from 'helpers/calculator'

const onDefault = function (day) {
  this.$router.push({name: 'lunar-day', params: {dayNumber: day.maxLunarDay.number, day: Object.assign({}, day)}})
}

/* const onCategory = function (day) {
  alert('Some Data')
} */

export default {
  name: 'main',
  components: {
    Calendar
  },
  data () {
    return {
      dayClickHandler: onDefault
    }
  },
  computed: {
    locale () {
      return this.$store.state.locale
    },
    geo () {
      return this.$store.state.geo
    },
    dayClickHandler: onDefault
  },
  methods: {
    setType () {
    }
  },
  mounted () {
    calculateCalendarHeight('calendar-container')
  }
}
