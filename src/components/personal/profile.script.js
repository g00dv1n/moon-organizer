import AvatarUploader from './avatar/Avatar.vue'
import CategoriesPicker from './categories-picker/CategoriesPicker.vue'
import DaytimePicker from './daytime-picker/DaytimePicker.vue'
import { mapGetters, mapMutations } from 'vuex'
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
          validator: (model) => model ? model.length > 6 : true
        },
        categories: {
          model: [],
          error: false,
          validator: (model) => model.length > 1
        }
      }
    }
  },
  computed: {
    ...mapGetters(['constants', 'user'])
  },
  methods: {
    ...mapMutations([types.SET_USER]),
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
      console.log('====')
      this.validate()
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
