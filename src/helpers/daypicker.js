import _ from 'lodash'

const processCatagoryContent = (contentArray, locale) => {
  return _.map([...contentArray], (c) => c[locale])
}

const getDayContent = (numberOfDay, locale) => {
  const _categories = require(`../days/${numberOfDay}`).categories
  const main = require(`../days/${numberOfDay}`).main
  const categories = _.chain(_categories)
    .keys()
    .map((k) => {
      return {
        name: k,
        plus: processCatagoryContent(_categories[k].plus, locale),
        minus: processCatagoryContent(_categories[k].minus, locale),
        path: require(`../assets/category-icons/${k}.png`)
      }
    })
    .value()
  return {
    categories,
    main
  }
}

export default getDayContent
