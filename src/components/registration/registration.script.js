import CategoriesPicker from '../personal/categories-picker/CategoriesPicker.vue'
import DaytimePicker from '../personal/daytime-picker/DaytimePicker.vue'
import { mapGetters } from 'vuex'
import moment from 'moment'

export default {
  name: 'registration',
  data () {
    return {
      purchaseForm: {},
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
          error: false,
          validator: (model) => model.length > 0
        },
        categories: {
          model: [],
          error: false,
          validator: (model) => model.length > 0
        }
      }
    }
  },
  components: {
    CategoriesPicker,
    DaytimePicker
  },
  computed: {
    ...mapGetters(['constants', 'axios', 'geo', 'locale'])
  },
  methods: {
    validate () {
      let res = true
      Object.keys(this.newUser).forEach((k) => {
        const isValid = this.newUser[k].validator ? this.newUser[k].validator(this.newUser[k].model) : true
        this.newUser[k].error = !isValid
        res = res && isValid
      })
      return res
    },
    getUserModel (newUser) {
      const u = newUser
      const nu = Object
        .keys(u)
        .reduce((result, k) => Object
          .assign(result, { [k]: u[k].normalizer ? u[k].normalizer(u[k].model) : u[k].model }), {})
      nu.locale = this.locale
      nu.geo = this.geo

      return nu
    },
    loadform () {
      return this
        .axios
        .post('/purchase/checkout', { user: this.getUserModel(this.newUser), locale: this.geo.country })
        .then(({ data }) => {
          const container = document.getElementById('hidden-purchase-form')
          container.innerHTML = data.htmlForm
          // return Form
          return Promise.resolve(container.children[0])
        })
        .catch((err) => {
          // console.log(JSON.parse(JSON.stringify(err)))
          this.$notify({
            title: this.constants.oopsTitle,
            message: err.response.data === 'emailAlreadyExists' ? this.constants.emailAlreadyExists : this.constants.oopsMsg,
            type: 'error'
          })
          return Promise.resolve(null)
        })
    },
    submitForm () {
      if (!this.validate()) {
        return
      }
      this.loadform()
        .then(form => {
          if (form) {
            form.submit()
          }
        })
    }
  },
  created () {
    window.yaCounter.reachGoal('on_registration')
  }
}
