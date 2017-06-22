import { mapGetters } from 'vuex'

export default {
  name: 'personal-sidenav',
  data () {
    return {}
  },
  components: {},
  computed: {
    ...mapGetters(['userAvatar', 'constants', 'user'])
  },
  methods: {},
  created () {}
}
