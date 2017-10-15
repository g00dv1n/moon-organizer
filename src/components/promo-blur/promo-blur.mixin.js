import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['bluredCategories'])
  },
  methods: {
    isShowBlurPromo (categoryName) {
      return this.bluredCategories.includes(categoryName)
    }
  }
}
