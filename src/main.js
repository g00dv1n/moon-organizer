import Vue from 'vue'
import App from './App'
import VueMaterial from 'vue-material'
import store from './store'
import router from './router'
import themesConfig from './themes.config'
import capitalize from './filters/capitalize'
import SocialSharing from 'vue-social-sharing'
import VueAnalytics from 'vue-analytics'
// import VueCharts from 'vue-charts'
import VueCharts from './components/vue-charts/main'

import 'vue-material/dist/vue-material.css'
import 'croppie/croppie.css'
import 'element-ui/lib/theme-default/index.css'
/* START ELEMENT UI */

import {
  // Autocomplete,
  Input,
  InputNumber,
  Checkbox,
  Select,
  Button,
  DatePicker,
  TimePicker,
  Icon,
  Upload,
  Progress,
  Spinner,
  Badge,
  Rate,
  Option,
  Carousel,
  Collapse,
  CollapseItem,
  Loading,
  Notification,
  Tooltip,
  CarouselItem,
  TimeSelect,
  Alert
} from 'element-ui'

// Vue.use(Autocomplete)
Vue.use(Input)
Vue.use(InputNumber)
Vue.use(Checkbox)
Vue.use(Select)
Vue.use(Button)
Vue.use(DatePicker)
Vue.use(TimePicker)
Vue.use(Tooltip)
Vue.use(Icon)
Vue.use(Upload)
Vue.use(Progress)
Vue.use(Spinner)
Vue.use(Badge)
Vue.use(Rate)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(Option)
Vue.use(TimeSelect)
Vue.use(Alert)

Vue.use(Loading.directive)

Vue.prototype.$loading = Loading.service
Vue.prototype.$notify = Notification

/* END ELEMENT UI */

Vue.use(VueCharts)

Vue.use(SocialSharing)

Vue.use(VueMaterial)

Vue.filter('capitalize', capitalize)

if (process.env.NODE_ENV === 'development') {
  console.warn('app running in development mode')
}

Vue.material.registerTheme(themesConfig)

Vue.use(VueAnalytics, { router, id: 'UA-91648464-1' })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

async function boot () {
  try {
    await store.dispatch('checkAuth')
    await store.dispatch('loadClientInfo')
    await store.dispatch('setupPrice')
  } catch (err) {
    console.log(err.message)
  }
}

boot()
