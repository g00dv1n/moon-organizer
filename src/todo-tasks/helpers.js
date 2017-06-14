import todoTasks from './task-list'

const genObjectByCat = function (categories) {
  const res = {}
  categories.forEach((c) => {
    res[c] = todoTasks
      .filter(tt => tt.category.toLowerCase() === c.toLowerCase())
      .map(tt => Object.assign(tt, {selected: false}))
  })
  return res
}

export default genObjectByCat
