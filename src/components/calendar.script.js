/**
 * Created by g00dv1n on 25.02.17.
 */
import month from 'helpers/month.fp'
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
    moonPhasePath (p) {
      return require(`../assets/moon-phases-color/${p.replace(' ', '_').toLowerCase()}.png`)
    },
    isColored (day) {
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
