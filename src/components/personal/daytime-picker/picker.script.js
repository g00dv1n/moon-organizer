import { mapGetters } from 'vuex'
import _ from 'lodash'
import moment from 'moment'

export default {
  name: 'daytimePicker',
  props: ['title', 'value'],
  data () {
    return {
      year: null,
      day: null,
      month: null,
      time: null
    }
  },
  watch: {
    year () {
      this.updateFullDate()
    },
    day () {
      this.updateFullDate()
    },
    month () {
      this.updateFullDate()
    },
    time () {
      this.updateFullDate()
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
    }
  },
  methods: {
    updateFullDate () {
      const date = moment({
        years: this.year,
        months: this.month - 1,
        days: this.day,
        hours: parseInt(this.time.split(':')[0] || 0),
        minutes: parseInt(this.time.split(':')[1] || 0)
      }).unix().toString()
      if (this.year !== null &&
        this.month !== null &&
        this.day !== null) {
        this.$emit('input', date)
      }
    }
  },
  created () {
    const m = this.value ? moment.unix(parseInt(this.value)) : moment()
    this.year = m.year()
    this.month = m.month() + 1
    this.day = m.date()
    this.time = moment(m).format('hh:mm')
  }
}
