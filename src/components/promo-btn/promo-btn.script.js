import {mapGetters} from 'vuex'

export default {
  name: 'promot-btn',
  data () {
    return {
      excludePages: ['promo-page', 'registration']
    }
  },
  components: {},
  computed: {
    ...mapGetters(['user']),
    isVisible () {
      return !(this.excludePages.includes(this.$route.name) || this.user)
    }
  },
  methods: {
    onClick () {
      this.$router.push({name: 'promo-page'})
    }
  },
  created () {
  }
}
