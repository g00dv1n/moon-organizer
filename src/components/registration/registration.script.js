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
  components: {
    CategoriesPicker,
    DaytimePicker
  },
  computed: {
    ...mapGetters(['constants', 'axios'])
  },
  methods: {
    loadform () {
      return this.axios.get('/purchase/form/ru')
        .then(({data}) => {
          const container = document.getElementById('hidden-purchase-form')
          container.innerHTML = data.htmlForm
          // return Form
          this.purchaseForm = container.children[0]
        })
    },
    submitForm () {
      if (this.purchaseForm.submit) {
        this.purchaseForm.submit()
      }
    }
  },
  async created () {
    await this.loadform()
  }
}
