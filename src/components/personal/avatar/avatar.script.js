import Croppie from 'croppie'
import { mapActions } from 'vuex'

export default {
  name: 'avatar',
  data () {
    return {
      imageUrl: '',
      crop: {},
      avatartUrl: ''
    }
  },
  methods: {
    ...mapActions(['putAvatar']),
    imgOnload () {
      this.crop = new Croppie(document.getElementById('avatar'), {
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
      this.crop.bind()
    },
    onChange (file) {
      this.imageUrl = file.url
      setTimeout(this.imgOnload, 1)
    },
    sendToServer () {
      this.crop
        .result({type: 'blob', circle: true, size: {width: 512, height: 512}})
        .then((file) => {
          this.putAvatar(file)
        })
        .catch((err) => console.error(err))
    }
  }
}
