import Calendar from './Calendar'
import { calculateCalendarHeight } from 'helpers/calculator'
import dayClickHandler from 'helpers/dayhandler'

export default {
  name: 'main',
  components: {
    Calendar
  },
  data () {
    return {dayClickHandler}
  },
  computed: {
    locale () {
      return this.$store.state.locale
    },
    geo () {
      return this.$store.state.geo
    }
  },
  mounted () {
    calculateCalendarHeight('calendar-container')
  }
}
