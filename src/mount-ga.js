import VueAnalytics from 'vue-analytics'

const UA_ID = 'UA-91648464-1'
const URL_PREFIX = '/calendar'

export default function MountGoogleAnalytics (Vue, router) {
  Vue.use(VueAnalytics, {
    id: UA_ID,
    router,
    autoTracking: {
      pageviewTemplate (route) {
        return {
          page: URL_PREFIX + route.path,
          title: document.title,
          location: window.location.href
        }
      }
    }
  })
}
