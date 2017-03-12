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
  props: ['locale', 'geo'],
  methods: {
    next () {
      this.date = moment(this.date).add(1, 'M').toDate()
    },
    prev () {
      this.date = moment(this.date).subtract(1, 'M').toDate()
    },
    moonPhasePath (p) {
      return require(`../assets/moon-phases/${p.replace(' ', '_').toLowerCase()}.png`)
    }
  },
  computed: {
    month () {
      let {latitude, longitude} = this.geo
      return this.geo ? month(this.date, this.locale, latitude, longitude) : false
    }
  }
}
