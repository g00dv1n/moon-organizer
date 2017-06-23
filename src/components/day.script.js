// @flow
import moment from 'moment'
import getDayContent from '../helpers/daypicker'
import { getGardenZodiacContent } from '../zodiac-garden'
import { mapGetters } from 'vuex'
import { getTasksForDay } from '../todo-tasks'
import { getChildConception } from '../child-conception'
import {getLunarBirthdayContent} from '../lunar-birthday'

const isEnableGoTop = (): boolean => {
  const MAX_HEIGTH_FOR_SCROLL = 500
  return window.pageYOffset > MAX_HEIGTH_FOR_SCROLL
}

const onScrollFabric = (self): Function => {
  return () => {
    if (self.isEnableGoTop !== undefined) {
      self.isEnableGoTop = isEnableGoTop()
    }
  }
}

export default {
  name: 'day',
  data () {
    return {
      isEnableGoTop: isEnableGoTop()
    }
  },
  props: ['isShowBirthday'],
  created () {
    window.addEventListener('scroll', onScrollFabric(this))
  },
  methods: {
    processCategoryForSharing (category: Category) {
      const createStr = (arr, char) => arr.map(e => `${char} ${e}`).join('\n')
      const plusStr = createStr(category.plus, '+')
      const minusStr = createStr(category.minus, '-')
      return `#moonorganizer\n${plusStr}\n${minusStr}`
    },
    goTop () {
      window.scrollTo(0, 0)
    },
    getDayNumber () {
      return this.$route.params && this.$route.params.dayNumber || this.day.showedLunarDay.number
    }
  },
  computed: {
    ...mapGetters(['lastClickedDay', 'locale', 'constants', 'user']),
    day () {
      return this.lastClickedDay
    },
    tasks () {
      const day = this.day
      if (!day) {
        return null
      }
      return getTasksForDay(day)
    },
    isPersonal () {
      return this.$store.state.personal
    },
    dayContent () {
      if (!this.getDayNumber()) {
        throw new Error('Cannot get dayNumber from $route.params.dayNumber')
      }
      const content: DayContent = getDayContent(this.getDayNumber(), this.locale)
      return content
    },
    mainLogo () {
      return window.location.origin + require('../assets/category-icons/default.png')
    },
    categories () {
      const categories: Array<Category> = this.dayContent.categories
      if (!categories) {
        throw new Error('Cannot get categories from lastClickedDay. lastClickedDay probably null.')
      }
      if (this.isPersonal) {
        return categories.filter((c: Category) => (this.user: User).categories.indexOf(c.name) !== -1)
      } else {
        return categories
      }
    },
    zodiac () {
      return this.lastClickedDay ? this.lastClickedDay.zodiac : null
    },
    lunarBirthday () {
      return this.isShowBirthday && this.day ? getLunarBirthdayContent(this.day.showedLunarDay.number) : null
    },
    zodiacGarden () {
      const main = 'garden'
      const isSelected = this.categories
        .some((c: Category) => c.name === main)
      return this.isPersonal && isSelected ? getGardenZodiacContent(this.zodiac) : null
    },
    childConception () {
      const main = 'health'
      const isSelected = this.categories
        .some((c: Category) => c.name === main)
      return this.isPersonal && isSelected ? getChildConception(this.zodiac) : null
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
      const dayNumber: number = this.getDayNumber()
      return `${dayNumber} ${this.constants['moonDay']}`
    },
    sharingUrl () {
      return window.location.href
    },
    lunarDay () {
      if (!this.day) return null
      const ld: LunarDay = this.day.showedLunarDay
      const formatStr = 'HH:mm DD-MM-YYYY'
      return {
        start: moment(ld.start).format(formatStr),
        end: moment(ld.end).format(formatStr)
      }
    }
  }
}
