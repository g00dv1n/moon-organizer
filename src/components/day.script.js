import getDayContent from 'helpers/daypicker'

export default {
  name: 'day',
  data () {
    return {}
  },
  computed: {
    categories () {
      const dayNumber = this.$route.params.dayNumber
      const day = getDayContent(dayNumber, this.locale)
      return day.categories
    },
    locale () {
      return this.$store.state.locale
    },
    constants () {
      return this.$store.getters.constants
    }
  },
  mounted () {
    const day = getDayContent(17, 'ru')
    console.log(day)
  }
}
