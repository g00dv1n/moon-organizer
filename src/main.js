// @flow

import Vue from 'vue'
import App from './App'
import VueMaterial from 'vue-material'
import store from './store'
import router from './router'
import themesConfig from './themes.config'
// $FlowIgnore
import 'vue-material/dist/vue-material.css'
import capitalize from './filters/capitalize'
import SocialSharing from 'vue-social-sharing'
import VueHead from 'vue-head'
// $FlowIgnore
import VueAnalytics from 'vue-analytics'
// $FlowIgnore
import ElementUI from 'element-ui'
// $FlowIgnore
import 'element-ui/lib/theme-default/index.css'
// $FlowIgnore
import 'croppie/croppie.css'

Vue.use(ElementUI)

Vue.use(SocialSharing)

Vue.use(VueHead)

Vue.use(VueMaterial)

Vue.filter('capitalize', capitalize)

if (process.env.NODE_ENV === 'development') {
  console.warn('app running in development mode')
}

Vue.material.registerTheme(themesConfig)

Vue.use(VueAnalytics, {router, id: 'UA-91648464-1'})

async function boot () {
  await store.dispatch('loadClientInfo')
  await store.dispatch('checkAuth')
  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {App}
  })
}

boot()
