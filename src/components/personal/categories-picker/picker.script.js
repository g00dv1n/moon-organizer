import { mapGetters } from 'vuex'

export default {
  name: 'categoriesPicker',
  props: ['title', 'value'],
  data () {
    return {
      selectedCategories: []
    }
  },
  watch: {
    selectedCategories () {
      this.$emit('input', this.selectedCategories)
    }
  },
  computed: {
    ...mapGetters(['calendarTypes', 'constants']),
    allCategories () {
      return this.calendarTypes
        .filter(type => type.name !== 'default')
    }
  },
  created () {
    this.selectedCategories = [].concat(this.value)
  }
}
