// @flow
import { mapGetters } from 'vuex'
import DaytimePicker from './daytime-picker/DaytimePicker.vue'
import { calculateDayInfo } from '../../helpers/month.fp'
import { onDefault } from '../../helpers/dayclicker'
import moment from 'moment'

export default {
  name: 'calc',
  components: {
    DaytimePicker
  },
  data () {
    return {
      day: '',
      cities: '',
      selectCity: null,
      loading: false,
      isCityValid: true
    }
  },
  computed: {
    ...mapGetters(['constants', 'locale', 'axios'])
  },
  methods: {
    loadCities (query: string) {
      const _loadCities = () => {
        this.axios.get(`/public/cities/${this.locale}/${query}`)
          .then(({data}) => {
            this.cities = data
            this.loading = false
          })
      }
      if (query !== '' && query.length > 2) {
        this.loading = true
        _loadCities()
      } else {
        this.cities = []
        this.loading = false
      }
    },
    calculate () {
      if (!this.selectCity) {
        this.isCityValid = false
        return
      }
      this.isCityValid = true
      const day = moment.unix(parseInt(this.day))
      const city: City = this.selectCity
      const ld: Day = calculateDayInfo(day, this.locale, parseInt(city.latitude), parseInt(city.longitude))
      ld.showedLunarDay = day.isBetween(ld.lunarDays[0].start, ld.lunarDays[0].end) ? ld.lunarDays[0] : ld.lunarDays[1]
      onDefault(this)(ld)
    }
  },
  created () {
  }
}
