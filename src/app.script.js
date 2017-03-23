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
      const width = document.documentElement.clientWidth
      const toggle = () => this.toggleLeftSidenav()
      if (width < 1281) {
        setTimeout(toggle, 1000)
      }
    },
    goToCalendar (type) {
      this.$store.dispatch('updateType', type)
      this.$material.setCurrentTheme(type)
      this.hideSidenav()
      if (type === 'default') {
        this.$router.push('/')
      } else {
        this.$router.push({name: 'category-calendar', params: {category: type}})
      }
    }

  },
  computed: {
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
      return require(`./assets/category-icons/${this.currentType}.png`)
    }
  },
  mounted () {
    // init client geo async
    this.$store.dispatch('loadClientInfo')
  }
}
