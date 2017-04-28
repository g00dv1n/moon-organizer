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
