// @flow

export default {
  name: 'app',
  data () {
    return {}
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
      const toggle = () => this.toggleLeftSidenav()
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
    isMobile () {
      if (document.documentElement) {
        return document.documentElement.clientWidth < 1281
      } else {
        return false
      }
    },
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
  mounted () {
    // init client geo async
    this.$store.dispatch('loadClientInfo')
  }
}
