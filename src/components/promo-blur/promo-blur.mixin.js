import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['bluredCategories'])
  },
  methods: {
    isShowBlurPromo (categoryName) {
      const isPersonal = this.$store.state.personal
      return !isPersonal && this.bluredCategories.includes(categoryName)
    }
  }
}
