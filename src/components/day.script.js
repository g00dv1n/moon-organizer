// @flow

import moment from 'moment'
import getDayContent from '../helpers/daypicker'
import { mapGetters } from 'vuex'

export default {
  name: 'day',
  data () {
    return {}
  },
  methods: {
    processCategoryForSharing (category: Category) {
      const createStr = (arr, char) => arr.map(e => `${char} ${e}`).join('\n')
      const plusStr = createStr(category.plus, '+')
      const minusStr = createStr(category.minus, '-')
      return `#moonorganizer\n${plusStr}\n${minusStr}`
    }
  },
  computed: {
    ...mapGetters(['lastClickedDay', 'locale', 'constants']),
    day () {
      return this.lastClickedDay
    },
    dayContent () {
      if (this.day) {
        return this.day.content
      } else {
        const dayNumber = this.$route.params.dayNumber
        if (!dayNumber) {
          throw new Error('Cannot get dayNumber from $route.params.dayNumber')
        }
        const content: DayContent = getDayContent(dayNumber, this.locale)
        return content
      }
    },
    mainLogo () {
      return window.location.origin + require('../assets/category-icons/default.png')
    },
    categories () {
      const categories: Array<Category> = this.dayContent.categories
      if (!categories) {
        throw new Error('Cannot get categories from lastClickedDay. lastClickedDay probably null.')
      }
      return categories
    },
    // get main day info using day number
    main () {
      const main: Array<DayMainInfo> = this.dayContent.main
      if (!main) {
        throw new Error('Cannot get main lunar day info from lastClickedDay. lastClickedDay probably null.')
      }
      return main
    },
    title () {
      const dayNumber: number = this.$route.params.dayNumber
      return `${dayNumber} ${this.constants['moonDay']}`
    },
    lunarDay () {
      if (!this.day) return null
      const ld: LunarDay = this.day.showedLunarDay
      const formatStr = 'hh:mm DD-MM-YYYY'
      return {
        start: moment(ld.start).format(formatStr),
        end: moment(ld.end).format(formatStr)
      }
    }
  }
}
