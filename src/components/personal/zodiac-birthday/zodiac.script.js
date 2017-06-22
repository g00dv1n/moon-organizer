import { MoonCard } from '../../moon-card'
import { mapGetters } from 'vuex'
import {getBirthdayZodiacContent} from '../../../zodiac-birthday'
import getZodiacByDate from '../../../helpers/zodiacsign'
import moment from 'moment'

export default {
  name: 'zodiac-birthday',
  data () {
    return {}
  },
  components: {
    MoonCard
  },
  computed: {
    ...mapGetters(['constants', 'user', 'locale']),
    zodiac () {
      const date = moment.unix(this.user.birthday)
      return getZodiacByDate(date.toDate())
    },
    content () {
      return getBirthdayZodiacContent(this.zodiac)
    },
    icon () {
      return require(`../../../assets/zodiac-signs/${this.zodiac}.png`)
    }
  },
  methods: {},
  created () {}
}
