import { mapGetters, mapActions } from 'vuex'
import LoginModal from './components/modals/LoginModal'
import { onCategory, onDefault } from './helpers/dayclicker'
import FeedbackModal from './components/modals/FeedbackModal.vue'
import GiftModal from './components/modals/GiftModal.vue'
import {PersonalSidenav} from './components/personal/sidenav'
import { FreeSidenav } from './components/free-version/sidenav'

const isMobile = () => {
  return document && document.documentElement && document.documentElement.clientWidth < 1024
}

const onResizeFabric = (self) => {
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
    FeedbackModal,
    GiftModal,
    PersonalSidenav,
    FreeSidenav
  },
  methods: {
    ...mapActions(['showTooltips', 'setupPromoBlurCategories']),
    toggleLeftSidenav () {
      this.$refs.leftSidenav.toggle()
    },
    openLoginModal () {
      this.$refs.loginModal.open()
    },
    closeLeftSidenav () {
      this.$refs.leftSidenav.close()
    },
    isLocale (locale) {
      return this.$store.state.locale === locale
    },
    setLocale (locale) {
      this.$store.commit('SET_LOCALE', locale)
    },
    isCurrentType (type) {
      return type === this.currentType
    },
    setCurrentType (type) {
      this.$store.commit('SET_CURRENT_TYPE', type)
    },
    hideSidenav () {
      const toggle = () => this.closeLeftSidenav()
      if (this.isMobile) {
        setTimeout(toggle, 1500)
      }
    },
    goToCalendar (type) {
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
    },
    openBookmarksModal () {
      this.$refs.bookmarks.open()
    }
  },
  computed: {
    ...mapGetters(['constants', 'userAvatar']),
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
    isLoginView () {
      return this.$route.name === 'login'
    },
    isNoLeaveFeedback () {
      return this.$store.state.isLeaveFeedback === 'no'
    }
  },
  created () {
    window.addEventListener('resize', onResizeFabric(this))

    if (this.$route.query.forcelogin) {
      setTimeout(() => this.openLoginModal(), 1)
    }

    // feedback modal
    /* if (this.isNoLeaveFeedback) {
      setTimeout(() => this.openFeedbackModal(), 60000)
    } */

    // gift modal
    // setTimeout(() => this.$refs.giftModal.open(), 1)
    // blur categories
    // this.setupPromoBlurCategories(this.$route.params)
  }
}
