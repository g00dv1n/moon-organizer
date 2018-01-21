import { mapGetters } from 'vuex'

export default {
  name: 'personal-sidenav',
  data () {
    return {}
  },
  components: {},
  computed: {
    ...mapGetters(['constants']),
    currentType () {
      return this.$store.state.currentType
    },
    types () {
      return this.$store.getters.calendarTypes
    },
    logoPath () {
      return require(`../../../assets/category-icons/${this.currentType}.png`)
    },
    isCalendarView () {
      return this.$route.name !== 'lunar-day'
    },
    currentYear () {
      return new Date().getFullYear()
    }
  },
  methods: {
    goToCategory (name) {
      this.$emit('category', name)
    },
    isCurrentType (type) {
      return type === this.currentType
    }
  },
  created () {}
}
