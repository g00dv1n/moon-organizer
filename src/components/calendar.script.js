/**
 * Created by g00dv1n on 25.02.17.
 */
import Month from 'helpers/month'
import moment from 'moment'

export default {
  name: 'calendar',
  data () {
    return {
      date: new Date()
    }
  },
  props: ['locale'],
  methods: {
    next () {
      this.date = moment(this.date).add(1, 'M').toDate()
    },
    prev () {
      this.date = moment(this.date).subtract(1, 'M').toDate()
    }
  },
  computed: {
    month () {
      return new Month(this.date, this.locale)
    }
  }
}
