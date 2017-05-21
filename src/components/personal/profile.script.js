// @flow
import AvatarUploader from './avatar/Avatar.vue'

export default {
  name: 'profile',
  components: {
    AvatarUploader
  },
  data () {
    return {
      imageUrl: ''
    }
  }
}
