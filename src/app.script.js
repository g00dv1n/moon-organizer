// @flow
import { mapGetters } from 'vuex'
import LoginModal from './components/LoginModal'

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
    LoginModal
  },
  head: {
    meta: [
      // {property: 'og:image', content: require('./assets/category-icons/default.png')}
    ]
  },
  methods: {
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
    locales () {
      return this.$store.state.LOCALES
    },
    logoPath () {
      // $FlowIgnore
      return require(`./assets/category-icons/${this.currentType}.png`)
    },
    geo () {
      return this.$store.state.geo
    }
  },
  created () {
    // init client geo async
    this.$store.dispatch('loadClientInfo')
    window.addEventListener('resize', onResizeFabric(this))
  }
}
