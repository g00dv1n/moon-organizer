// @flow
import { mapGetters, mapActions } from 'vuex'
import LoginModal from './components/modals/LoginModal'
import { onCategory, onDefault } from './helpers/dayclicker'
import FeedbackModal from './components/modals/FeedbackModal.vue'

const isMobile = () => {
  return document && document.documentElement && document.documentElement.clientWidth < 1024
}

const onResizeFabric = (self): Function => {
  return () => {
    if (self.isMobile !== undefined) {
      self.isMobile = isMobile()
    }
  }
}

export default {
  name: 'app',
  data () {
    return {
      isMobile: isMobile()
    }
  },
  components: {
    LoginModal,
    FeedbackModal
  },
  head: {
    meta: [
      // {property: 'og:image', content: require('./assets/category-icons/default.png')}
    ]
  },
  methods: {
    ...mapActions(['showTooltips', 'showDayTooltip']),
    toggleLeftSidenav () {
      this.$refs.leftSidenav.toggle()
    },
    openLoginModal () {
      this.$refs.loginModal.open()
    },
    closeLeftSidenav () {
      this.$refs.leftSidenav.close()
    },
    isLocale (locale: string) {
      return this.$store.state.locale === locale
    },
    setLocale (locale: string) {
      this.$store.commit('SET_LOCALE', locale)
    },
    isCurrentType (type: string) {
      return type === this.currentType
    },
    setCurrentType (type: string) {
      this.$store.commit('SET_CURRENT_TYPE', type)
    },
    hideSidenav () {
      const toggle = () => this.closeLeftSidenav()
      if (this.isMobile) {
        setTimeout(toggle, 1500)
      }
    },
    goToCalendar (type: string) {
      this.$store.dispatch('updateType', type)
      this.hideSidenav()
      if (type === 'default') {
        this.$router.push('/')
      } else {
        this.$router.push({name: 'category-calendar', params: {category: type}})
      }
    },
    todayClickHandler () {
      const today = this.$store.state.today
      if (!today) return

      if (this.currentType === 'default') {
        onDefault(this)(today)
      } else {
        onCategory(this)(today)
      }
    },
    logoClick () {},
    openFeedbackModal () {
      this.$refs.feedback.open()
    }
  },
  computed: {
    ...mapGetters(['constants']),
    types () {
      return this.$store.getters.calendarTypes
    },
    currentType () {
      return this.$store.state.currentType
    },
    authorized () {
      return this.$store.state.authorized
    },
    locales () {
      return this.$store.state.LOCALES
    },
    logoPath () {
      // $FlowIgnore
      return require(`./assets/category-icons/${this.currentType}.png`)
    },
    geo () {
      return this.$store.state.geo
    },
    main () {
      return this.$refs['main'] || document.getElementById('main')
    },
    isCalendarView () {
      return this.$route.name !== 'lunar-day'
    },
    isNoLeaveFeedback () {
      return this.$store.state.isLeaveFeedback === 'no'
    }
  },
  created () {
    window.addEventListener('resize', onResizeFabric(this))

    const firstTime = this.$store.state.notFirstTime === 'no'
    const isCalendarView = this.isCalendarView
    if (firstTime && isCalendarView) {
      this.showDayTooltip()
    }

    if (this.isNoLeaveFeedback) {
      document.documentElement.addEventListener('mouseleave', (e) => {
        if (e.clientY < 0 && this.isNoLeaveFeedback) {
          this.openFeedbackModal()
        }
      })
    }
  }
}
