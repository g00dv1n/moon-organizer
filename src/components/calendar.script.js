// @flow

import month from '../helpers/month.fp'
import moment from 'moment'

export default {
  name: 'calendar',
  data () {
    return {
      date: new Date()
    }
  },
  props: ['locale', 'geo', 'dayClickHandler', 'isColoredHandler'],
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
    }
  },
  computed: {
    month () {
      let {latitude, longitude} = this.geo
      let res = this.geo ? month(this.date, this.locale, latitude, longitude) : null
      console.log('Calendar month')
      console.log(res)
      return res
    }
  }
}
