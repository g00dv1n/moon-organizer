// @flow
import AvatarUploader from './avatar/Avatar.vue'
import CategoriesPicker from './categories-picker/CategoriesPicker.vue'

export default {
  name: 'profile',
  components: {
    AvatarUploader,
    CategoriesPicker
  },
  data () {
    return {
      name: '',
      surname: '',
      birthday: '',
      email: ''
    }
  },
  created () {
    console.log(this)
  }
}
