export default {
  props: {
    mdTitle: String,
    mdOkText: {
      type: String,
      default: 'Ok'
    }
  },
  data: () => ({
    debounce: false,
    rate: null,
    feedbackText: ''
  }),
  methods: {
    fireCloseEvent    () {
      if (!this.debounce) {
        this.$emit('close')
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
    }
  }
}
