// @flow
import { MoonCard } from '../../moon-card'
import { mapGetters } from 'vuex'
import lunarDays from '../../../helpers/lunardays'
import {getLunarBirthdayContent} from '../../../lunar-birthday'
import getDayContent from '../../../helpers/daypicker'
import moment from 'moment'

export default {
  name: 'lunar-birthday',
  data () {
    return {}
  },
  components: {
    MoonCard
  },
  computed: {
    ...mapGetters(['constants', 'user', 'geo', 'locale']),
    lunarDay () {
      const {latitude, longitude} = this.geo
      const birthday = moment.unix(+this.user.birthday)
      const ld: LunarDay[] = lunarDays(birthday, latitude, longitude)
      return birthday.isBetween(moment(ld[0].start), moment(ld[0].end)) ? ld[0] : ld[1]
    },
    lunarBirthdayContent () {
      const ld = this.lunarDay
      return getLunarBirthdayContent(ld.number)
        .map(p => p[this.locale])
    },
    mainDayContent () {
      const ld = this.lunarDay
      return getDayContent(ld.number, this.locale).main
    },
    subtitle () {
      const ld = this.lunarDay
      const text = {
        ru: `Вы родились в ${ld.number} лунный день.`,
        en: `You were born on the ${ld.number} lunar day.`
      }
      return text[this.locale]
    }
  },
  methods: {},
  created () {}
}
