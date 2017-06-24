import { mapGetters } from 'vuex'
import { getBiorhytms } from '../../../biorhythms'
import moment from 'moment'

export default {
  name: 'biorhythms',
  data () {
    return {}
  },
  components: {},
  computed: {
    ...mapGetters(['constants', 'locale', 'user']),
    biorhythms () {
      const b = moment.unix(+this.user.birthday)
      return getBiorhytms(b)
    },
    columns () {
      return [{
        'type': 'string'
      }, {
        'type': 'number',
        'label': this.constants.physicalBio
      }, {
        'type': 'number',
        'label': this.constants.emotionalBio
      }, {
        'type': 'number',
        'label': this.constants.intellectualBio
      }]
    },
    rows () {
      const {physical, emotional, intellectual} = this.biorhythms
      return physical
        .map((d, i) => [d.date.locale(this.locale).format('D ddd'),
          physical[i].per, emotional[i].per, intellectual[i].per])
    },
    options () {
      return {
        legend: 'bottom',
        vAxis: {
          viewWindowMode: 'explicit',
          minValue: -100,
          maxValue: 100
        },
        hAxis: {
          showTextEvery: 1
        },
        height: '500',
        width: '100%',
        curveType: 'function',
        tooltip: { isHtml: true },
        chartArea: {
          bottom: 125,
          top: 50,
          width: '90%',
          height: '100%'
        }
      }
    }
  },
  methods: {},
  created () {
    window.addEventListener('resize', () => {
      const chart = this.$refs.bioChart
      console.log(chart)
      chart.drawChart()
    })
  }
}
