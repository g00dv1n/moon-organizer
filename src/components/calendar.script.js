// @flow
import {month} from '../helpers/month.fp'
import moment from 'moment'
import WeekDayModal from './modals/WeekDayModal.vue'

export default {
  name: 'calendar',
  data () {
    return {
      date: new Date()
    }
  },
  components: {
    WeekDayModal
  },
  props: ['locale', 'geo', 'dayClickHandler', 'isColoredHandler'],
  mounted () {},
  methods: {
    next () {
      this.date = moment(this.date).add(1, 'M').toDate()
    },
    prev () {
      this.date = moment(this.date).subtract(1, 'M').toDate()
    },
    isColored (day: Day) {
      if (!this.isColoredHandler) return false

      return this.isColoredHandler(day)
    },
    onDayClick (day: number) {
      this.dayClickHandler(day)
    },
    onWeekDayClick (weekDay: string) {
      const weekDayModal = this.$refs.weekDayModal || document.getElementById('weekDayModal')
      weekDayModal.open(weekDay)
    }
  },
  computed: {
    month () {
      let {latitude, longitude} = this.geo
      let res: Month | null = this.geo ? month(this.date, this.locale, latitude, longitude) : null
      console.log('Calendar month')
      console.log(res)
      // Save today for today btn
      if (res) {
        const today: Day = res.days.find((day: Day) => day.isToday)
        if (today) this.$store.commit('SET_TODAY', today)
      }
      return res
    }
  }
}
