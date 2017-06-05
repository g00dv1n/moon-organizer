import { mapGetters } from 'vuex'
import DaytimePicker from './daytime-picker/DaytimePicker.vue'

export default {
  name: 'calc',
  components: {
    DaytimePicker
  },
  data () {
    return {
      day: '',
      cities: '',
      selectCity: [],
      loading: false
    }
  },
  computed: {
    ...mapGetters(['constants', 'locale', 'axios'])
  },
  methods: {
    loadCities (query) {
      const _loadCities = () => {
        this.axios.get(`/public/cities/${this.locale}/${query}`)
          .then(({data}) => {
            this.cities = data
            this.loading = false
          })
      }
      if (query !== '' && query.length > 3) {
        this.loading = true
        _loadCities()
      } else {
        this.cities = []
        this.loading = false
      }
    }
  },
  created () {
  }
}
