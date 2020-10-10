export default {
  name: 'login',

  data () {
    return {
      isLoginError: false,
      user: {
        email: null,
        password: null
      }
    }
  },
  computed: {
    constants () {
      return this.$store.getters.constants
    },
    isReadyForSubmit () {
      return this.user.email && this.user.password
    }
  },
  methods: {
    submit () {
      if (!this.isReadyForSubmit) return

      this.$store.dispatch('login', this.user)
        .then((res) => {
          this.isLoginError = false
          this.$router.push({name: 'default'})
          window.location.reload()
        })
        .catch((err) => {
          console.log(err)
          this.isLoginError = true
        })
    }
  }
}
