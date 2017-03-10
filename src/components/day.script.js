import categoriesConfig from '../themes.config'

export default {
  name: 'day',
  data () {
    return {}
  },
  computed: {
    categories () {
      return Object.keys(categoriesConfig).map((k) => {
        return {
          name: k,
          colorStyle: {'background-color': categoriesConfig[k].primary.color},
          path: require(`../assets/category-icons/${k}.png`)
        }
      })
    }
  }
}
