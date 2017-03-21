// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueMaterial from 'vue-material'
import store from './store'
import router from './router'
import themesConfig from './themes.config'
import 'vue-material/dist/vue-material.css'
import capitalize from 'filters/capitalize'
import SocialSharing from 'vue-social-sharing'

Vue.use(SocialSharing)

Vue.use(VueMaterial)

Vue.filter('capitalize', capitalize)

Vue.material.registerTheme(themesConfig)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})
