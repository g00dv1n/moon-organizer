// @flow
import AvatarUploader from './avatar/Avatar.vue'
import CategoriesPicker from './categories-picker/CategoriesPicker.vue'
import DaytimePicker from './daytime-picker/DaytimePicker.vue'
import { mapGetters } from 'vuex'

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
      newPassword: ''
    }
  },
  computed: {
    ...mapGetters(['constants'])
  },
  created () {
    console.log(this)
  }
}
