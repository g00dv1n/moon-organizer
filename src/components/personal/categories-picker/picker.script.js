// @flow
import { mapGetters } from 'vuex'

export default {
  name: 'categoriesPicker',
  props: ['title'],
  data () {
    return {
      selectedCategories: []
    }
  },
  computed: {
    ...mapGetters(['calendarTypes', 'constants']),
    categories () {
      return this.calendarTypes
        .filter(type => type.name !== 'default')
    }
  },
  created () {
  }
}
