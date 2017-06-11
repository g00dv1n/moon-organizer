// @flow
import todoTasks from './task-list'

const genObjectByCat = (categories: Array<string>) => {
  const res = {}
  categories.forEach((c) => {
    res[c] = todoTasks.filter(tt => tt.category.toLowerCase() === c.toLowerCase())
  })
  return res
}

export default genObjectByCat
