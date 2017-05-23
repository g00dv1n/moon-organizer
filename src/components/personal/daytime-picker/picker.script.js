import { mapGetters } from 'vuex'
import _ from 'lodash'
import moment from 'moment'

export default {
  name: 'daytimePicker',
  props: ['title', 'birthday'],
  data () {
    return {
      year: null,
      day: null,
      month: null,
      time: null
    }
  },
  computed: {
    ...mapGetters(['constants']),
    locale () {
      return this.$store.state.locale
    },
    years () {
      return _.rangeRight(1945, moment().year() + 1)
    },
    months () {
      const lm = moment().locale(this.locale).localeData().months()
      return _.rangeRight(0, 12)
        .map(i => {
          return {
            number: i + 1,
            name: lm[i]
          }
        })
    },
    days () {
      let days = []
      if (this.month) {
        let daysInMonth = moment()
          .month(this.month - 1)
          .daysInMonth()
        days = _.rangeRight(1, daysInMonth + 1)
      } else {
        days = _.rangeRight(1, 32)
      }
      return days
    },
    fullDate () {
      const date = moment({
        years: this.year,
        months: this.month - 1,
        days: this.day,
        hours: parseInt(this.time.split(':')[0] || 0),
        minutes: parseInt(this.time.split(':')[1] || 0)
      }).toString()

      if (this.year !== null &&
        this.month !== null &&
        this.day !== null) {
        this.$emit('selectedDatetime', date)
      }
    }
  },
  created () {
    const m = moment.unix(parseInt(this.birthday))
    this.year = m.year()
    this.month = m.month() + 1
    this.day = m.day()
    this.time = moment(m).format('hh:mm')
  }
}
