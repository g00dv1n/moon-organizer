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
  methods: {
    goToProfile () {
      this.$router.push({name: 'profile'})
    },
    logOut () {
      localStorage.setItem('TOKEN', '')
      location.reload()
    }
  },
  created () {}
}
