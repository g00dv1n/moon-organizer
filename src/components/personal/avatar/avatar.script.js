import Croppie from 'croppie'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'avatar',
  data () {
    return {
      crop: {},
      file: {},
      isSuccesUpload: false,
      showedCancel: false,
      errorMsg: ''
    }
  },
  props: ['title'],
  computed: {
    ...mapGetters(['constants'])
  },
  methods: {
    ...mapActions(['putAvatar']),
    cancelCrop () {
      this.file = {}
    },
    imgOnload () {
      const avatar = this.$refs.avatar || document.getElementById('avatar')
      this.crop = new Croppie(avatar, {
        enableExif: true,
        viewport: {
          width: 200,
          height: 200,
          type: 'circle'
        },
        boundary: {
          width: 300,
          height: 300
        }
      })
      // this.crop.bind()
    },
    onChange (file) {
      if (file.name.match(/.(jpg|jpeg|png|gif)$/i)) {
        this.file = file
        this.isSuccesUpload = false
        setTimeout(this.imgOnload, 1)
      } else {
        this.errorMsg = this.constants.mustBeImage
      }
    },
    async sendToServer () {
      try {
        const file = await this.crop
          .result({type: 'blob', circle: true, size: {width: 512, height: 512}})
        await this.putAvatar(file)
        this.isSuccesUpload = true
        this.file = {}
      } catch (err) {
        this.isSuccesUpload = false
        this.errorMsg = this.constants.uploadingError
      }
    }
  }
}
