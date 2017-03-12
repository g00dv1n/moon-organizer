/**
 * Created by g00dv1n on 02.03.17.
 */

import Vue from 'vue'
import clientGeo from 'helpers/clientgeo'

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
    },
    logoPath () {
      return require(`./assets/category-icons/${this.currentType}.png`)
    }
  },
  mounted () {
    Vue.material.setCurrentTheme('default')
    // init client geo async
    clientGeo()
      .then((info) => {
        this.$store.commit('SET_CLIENT_GEO', info.data)
      })
      .catch((err) => {
        throw err.message
      })
  }
}
