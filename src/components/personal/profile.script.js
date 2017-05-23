import AvatarUploader from './avatar/Avatar.vue'
import CategoriesPicker from './categories-picker/CategoriesPicker.vue'
import DaytimePicker from './daytime-picker/DaytimePicker.vue'
import { mapGetters, mapMutations } from 'vuex'
import types from '../../store/mutationTypes'

export default {
  name: 'profile',
  components: {
    AvatarUploader,
    CategoriesPicker,
    DaytimePicker
  },
  data () {
    return {
      name: '',
      surname: '',
      birthday: '',
      email: '',
      oldPassword: '',
      newPassword: '',
      categories: []
    }
  },
  computed: {
    ...mapGetters(['constants', 'user'])
  },
  methods: {
    ...mapMutations([types.SET_USER])
  },
  created () {
    // this[types.SET_USER]({categories: ['lucky']})
    // simple fields
    /* this.name = this.user.name
    this.surname = this.user.surname
    this.email = this.user.email
    this.birthday = this.user.birthday
    this.categories = this.user.categories */
    const user = Object.assign({}, this.user)
    Object.keys(user)
      .forEach(k => {
        this[k] = user[k]
      })
  },
  save () {
  }
}
