import { mapGetters } from 'vuex'

export default {
  name: 'categoriesPicker',
  props: ['title', 'categories'],
  data () {
    return {
      selectedCategories: []
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
    this.selectedCategories = [].concat(this.categories)
  }
}
