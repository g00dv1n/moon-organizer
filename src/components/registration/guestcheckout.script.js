import { mapGetters } from 'vuex'

export default {
  name: 'guest-checkout',

  computed: {
    ...mapGetters(['axios', 'geo', 'locale'])
  },
  methods: {
    loadform () {
      return this
        .axios
        .post('/purchase/checkout', {
          locale: this.geo.country,
          plan: this.$route.query.plan || 'month'
        })
        .then(({ data }) => {
          const container = document.getElementById('hidden-purchase-form')
          container.innerHTML = data.htmlForm
          // return Form
          return Promise.resolve(container.children[0])
        })
    }
  },
  mounted () {
    this.loadform()
    .then(form => {
      if (form) {
        this.$ga.page('/calendar/vp-guest-checkout')
        form.submit()
      }
    })
  }
}
