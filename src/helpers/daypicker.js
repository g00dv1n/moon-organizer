import _ from 'lodash'

const processCategoryContent = (contentArray, locale) => {
  return _.map([...contentArray], (c) => c[locale])
}

const getCategoryOrder = (name) => {
  const CATEGORIES = ['lucky', 'beauty', 'relationship', 'business', 'health', 'house', 'shopping', 'garden', 'shopping']
  const index = CATEGORIES.indexOf(name.toLowerCase())
  return index !== -1 ? index : null
}

const newCategoryObject = (name, categories, locale) => {
  return {
    name: name,
    plus: processCategoryContent(categories[name].plus || [], locale),
    minus: processCategoryContent(categories[name].minus || [], locale),
    path: require(`../assets/category-icons/${name}.png`),
    order: getCategoryOrder(name)
  }
}

const newMainObject = (name, main, locale) => {
  return {
    name,
    text: main[name][locale]
  }
}

// Transform day data to array of categories and array of main info
const getDayContent = (numberOfDay, locale) => {
  const _categories = require(`../days/${numberOfDay}`).categories
  // main day info
  const _main = require(`../days/${numberOfDay}`).main
  const categories = _.chain(_categories)
    .keys()
    .map(k => newCategoryObject(k, _categories, locale))
    .sortBy('order')
    .value()

  const main = _.chain(_main)
    .keys()
    .map(k => newMainObject(k, _main, locale))
    .value()

  return {
    categories,
    main
  }
}

export default getDayContent
