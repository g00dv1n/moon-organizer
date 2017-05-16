// @flow
import Croppie from 'croppie'

export default {
  name: 'avatar',
  data () {
    return {
      imageUrl: ''
    }
  },
  methods: {
    imgOnload () {
      const crop = new Croppie(document.getElementById('avatar'), {
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
      crop.bind()
    },
    onChange (file, fileList) {
      this.imageUrl = URL.createObjectURL(file.raw)
      setTimeout(this.imgOnload, 1)
    }
  }
}
