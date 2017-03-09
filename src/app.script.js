/**
 * Created by g00dv1n on 02.03.17.
 */

import Vue from 'vue'
import month from 'helpers/month.fp'

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
    logoPath (type) {
      return require(`./assets/category-icons/${type}.png`)
    },
    isCurrentType (type) {
      return type === this.currentType
    },
    setCurrentType (type) {
      this.$store.commit('SET_CURRENT_TYPE', type)
      this.$material.setCurrentTheme(type)
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
    }
  },
  mounted () {
    Vue.material.setCurrentTheme('default')
    console.log(month(new Date(), 'ru'))
  }
}
