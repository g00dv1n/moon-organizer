import getDayContent from 'helpers/daypicker'
import moment from 'moment'

const getCurrentLunarDay = (day) => {
  if (!day.isToday) return day.maxLunarDay

  return moment().isBetween(day.lunarDays[0].start, day.lunarDays[0].end) ? day.lunarDays[0] : day.lunarDays[1]
}

export default {
  name: 'day',
  data () {
    return {}
  },
  props: ['day'],

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
    },
    lunarDay () {
      if (!this.day) return null
      const ld = getCurrentLunarDay(this.day)
      const formatStr = 'hh:mm DD-MM-YYYY'
      return {
        start: moment(ld.start).format(formatStr),
        end: moment(ld.end).format(formatStr)
      }
    },
    zodiacSignPath () {
      return require(`../assets/zodiac-signs/${this.day.zodiac}.png`)
    }
  },
  mounted () {
    const day = getDayContent(17, 'ru')
    console.log(day)
  }
}
