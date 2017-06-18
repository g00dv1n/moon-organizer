// @flow

import Calendar from './Calendar.vue'
import { calculateCalendarHeight } from '../helpers/calculator'
import CategoryModal from './modals/CategoryModal.vue'
import { mapGetters } from 'vuex'
import { onCategory, onDefault } from '../helpers/dayclicker'
import { isTaskInDay } from '../todo-tasks'

const extractCategoryContentByDayObject = function (type: string, locale: string, day: Day): ?Category {
  let categories = null
  if (day && day.content && day.content.categories) {
    categories = day.content.categories
  } else {
    console.warn(`Cannot get categories from day.content.categories in extractCategoryContentByDayObject func`)
  }
  return categories ? categories.find(c => c.name === type) : null
}

const isColoredByCalendarType = function (type: string, locale: string): Function {
  return function (day: Day): boolean {
    const category = extractCategoryContentByDayObject(type, locale, day)
    return !!category && category.plus.length > 0 && category.minus.length === 0
  }
}

export default {
  name: 'main',
  components: {
    Calendar,
    CategoryModal
  },
  data () {
    return {}
  },
  computed: {
    ...mapGetters(['locale', 'user']),
    modal () {
      const modal = this.$refs['modal'] || document.getElementById('modal')
      return modal
    },
    geo () {
      return this.$store.state.geo
    },
    currentType () {
      return this.$store.state.currentType
    },
    isDefault () {
      return this.currentType === 'default'
    },
    constants () {
      return this.$store.getters.constants
    },
    title () {
      const day = this.$store.state.lastClickedDay
      if (!day || this.isDefault) return null
      const number = day.maxLunarDay.number
      return `${number} ${this.constants['moonDay']}`
    },
    category () {
      const day = this.$store.state.lastClickedDay
      if (!day || this.isDefault) return null

      return extractCategoryContentByDayObject(this.currentType, this.locale, day)
    }
  },
  methods: {
    openModal () {
      this.$refs['modal'].open()
    },
    dayClickHandler () {
      return this.isDefault ? onDefault(this) : onCategory(this)
    },
    isColoredHandler () {
      if (this.user && this.user.tasksOnCalendar && this.user.tasksOnCalendar.length > 0) {
        return isTaskInDay
      } else {
        const VIEWED_TYPES = ['lucky', 'fishing']
        return VIEWED_TYPES.includes(this.currentType)
          ? isColoredByCalendarType(this.currentType, this.locale) : () => false
      }
    }
  },
  mounted () {
    const resizeEl = 'calendar-container'
    calculateCalendarHeight(resizeEl)
    window.onresize = () => {
      calculateCalendarHeight(resizeEl)
    }
  }
}

