// @flow
import { mapActions } from 'vuex'
import moment from 'moment'

export default {
  name: 'reviews',
  data () {
    return {reviews: []}
  },
  methods: {
    ...mapActions(['getReviews']),
    formatDate (date) {
      const formatStr = 'HH:mm DD-MM-YYYY'
      return moment(date).format(formatStr)
    }
  },
  created () {
    this.getReviews().then(({data}) => {
      console.log(data)
      this.reviews = data
    })
  }
}

