import { mapGetters } from 'vuex'

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
    weekDay: null
  }),
  computed: {
    ...mapGetters(['weekDays'])
  },
  methods: {
    fireCloseEvent    () {
      if (!this.debounce) {
        this.$emit('close')
      }
    },
    open  (weekDay) {
      this.$emit('open')
      this.debounce = false
      this.weekDay = this.weekDays[weekDay]
      this.$refs.dialog.open()
    },
    close () {
      this.fireCloseEvent()
      this.debounce = true
      this.$refs.dialog.close()
    }
  }
}

