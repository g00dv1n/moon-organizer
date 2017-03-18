export default {
  name: 'app',
  data () {
    return {}
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
    goToCalendar (type) {
      this.$store.commit('SET_CURRENT_TYPE', type)
      this.$material.setCurrentTheme(type)
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
