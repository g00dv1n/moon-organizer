import AvatarUploader from './avatar/Avatar.vue'
import CategoriesPicker from './categories-picker/CategoriesPicker.vue'
import DaytimePicker from './daytime-picker/DaytimePicker.vue'
import { mapGetters, mapMutations, mapActions } from 'vuex'
import types from '../../store/mutationTypes'
import moment from 'moment'

export default {
  name: 'profile',
  components: {
    AvatarUploader,
    CategoriesPicker,
    DaytimePicker
  },
  data () {
    return {
      newUser: {
        name: {
          model: '',
          error: false,
          validator: (model) => model.length > 0
        },
        surname: {
          model: '',
          error: false
        },
        birthday: {
          model: '',
          error: false,
          validator: (model) => moment.unix(parseInt(model)).isValid()
        },
        email: {
          model: '',
          error: false
        },
        password: {
          model: '',
          error: false
        },
        newPassword: {
          model: '',
          error: false,
          validator: (model) => model ? model.length > 7 : true
        },
        categories: {
          model: [],
          error: false,
          validator: (model) => model.length > 0
        }
      }
    }
  },
  computed: {
    ...mapGetters(['constants', 'user'])
  },
  methods: {
    ...mapMutations([types.SET_USER]),
    ...mapActions(['updateUser']),
    save () {
      this.$refs.daytimePicker.isValid()
    },
    validate () {
      let res = true
      Object.keys(this.newUser).forEach((k) => {
        const isValid = this.newUser[k].validator ? this.newUser[k].validator(this.newUser[k].model) : true
        this.newUser[k].error = !isValid
        res = res && isValid
      })
      return res
    },
    submit () {
      if (this.validate()) {
        this.updateUser(this.newUserUpdated())
          .then(() => {
            this.$notify({
              title: this.constants.successTitle,
              message: this.constants.successMsg,
              type: 'success'
            })
          })
          .catch(() => {
            this.$notify({
              title: this.constants.oopsTitle,
              message: this.constants.oopsMsg,
              type: 'error'
            })
          })
      }
    },
    newUserUpdated () {
      console.log('NEW USER')
      const u = this.newUser
      const nu = Object
        .keys(u)
        .reduce((result, k) => Object
          .assign(result, {[k]: u[k].normalizer ? u[k].normalizer(u[k].model) : u[k].model}), {})
      if (nu.newPassword) {
        nu.password = nu.newPassword
      }
      delete nu.newPassword
      console.log(nu)
      return nu
    }
  },
  created () {
    const user = Object.assign({}, this.user)
    Object.keys(user)
      .forEach(k => {
        if (k in this.newUser) {
          this.newUser[k].model = user[k]
        }
      })
  }
}
