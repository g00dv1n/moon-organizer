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
    main () {
      const dayNumber = this.$route.params.dayNumber
      const day = getDayContent(dayNumber, this.locale)
      return day.main
    },
    locale () {
      return this.$store.state.locale
    },
    constants () {
      return this.$store.getters.constants
    },
    title () {
      const dayNumber = this.$route.params.dayNumber
      return `${dayNumber} ${this.constants['moonDay']}`
    }
  },
  mounted () {
    const day = getDayContent(17, 'ru')
    console.log(day)
  }
}
