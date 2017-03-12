/**
 * Created by g00dv1n on 25.02.17.
 */

import Calendar from './Calendar'
import { calculateCalendarHeight } from 'helpers/calculator'

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
    }
  },
  mounted () {
    calculateCalendarHeight('calendar-container')
  }
}
