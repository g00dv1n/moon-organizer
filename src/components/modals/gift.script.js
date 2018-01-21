import { mapGetters } from 'vuex'

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
    DELAY: 60 * 1000,
    STORAGE_KEY: 'clickToPromoPopup_1'
  }),
  computed: {
    ...mapGetters(['constants', 'locale', 'user'])
  },
  methods: {
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
      this.setFlag()
    },
    goToPromo () {
      this.close()
      this.$router.push({name: 'promo-page'})
      this.setFlag()
    },
    canOpen () {
      return !this.getFlag() && this.locale === 'ru' && !this.user
    },
    getFlag () {
      return window.localStorage.getItem(this.STORAGE_KEY)
    },
    setFlag () {
      return window.localStorage.setItem(this.STORAGE_KEY, 'true')
    }
  },
  mounted () {
    setTimeout(() => {
      if (this.canOpen()) this.open()
    }, this.DELAY)
  }
}
