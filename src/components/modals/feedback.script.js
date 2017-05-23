import { mapActions, mapGetters } from 'vuex'

export default {
  props: {
    mdTitle: String,
    mdOkText: {
      type: String,
      default: 'Ok'
    },
    onClose: {
      type: Function,
      default: () => {}
    }
  },
  data: () => ({
    debounce: false,
    rate: 0,
    feedbackText: '',
    id: null
  }),
  computed: {
    ...mapGetters(['constants'])
  },
  methods: {
    ...mapActions(['sendReview']),
    fireCloseEvent    () {
      if (!this.debounce) {
        this.$emit('close')
        this.onClose()
      }
    },
    open  () {
      this.$emit('open')
      this.debounce = false
      this.$refs.dialog.open()
    },
    close () {
      this.fireCloseEvent()
      this.debounce = true
      this.$refs.dialog.close()
    },
    send () {
      this.sendReview({
        rate: this.rate,
        feedback: this.feedbackText,
        id: this.id
      }).then(review => {
        this.id = +review.id
      })
    }
  }
}
