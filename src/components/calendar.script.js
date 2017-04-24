// @flow

import month from '../helpers/month.fp'
import moment from 'moment'
import { mapGetters } from 'vuex'

export default {
  name: 'calendar',
  data () {
    return {
      date: new Date()
    }
  },
  props: ['locale', 'geo', 'dayClickHandler', 'isColoredHandler'],
  mounted () {
    // TODO костыль
    const ctx = this
    if (localStorage.getItem('notFirstTime') !== 'yes') {
      console.log(ctx.$refs.tooltip)
      setTimeout(() => {
        ctx.$refs.tooltip[0].open()
        localStorage.setItem('notFirstTime', 'yes')
      }, 500)
    }
  },
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
      // TODO костыль
      if (this.$refs.tooltip && this.$refs.tooltip[0]) this.$refs.tooltip[0].close()
      this.dayClickHandler(day)
    }
  },
  computed: {
    ...mapGetters(['constants']),
    month () {
      let {latitude, longitude} = this.geo
      let res = this.geo ? month(this.date, this.locale, latitude, longitude) : null
      console.log('Calendar month')
      console.log(res)
      return res
    },
    notFirstTime () {
      return localStorage.getItem('notFirstTime')
    }
  }
}
