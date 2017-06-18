// @flow
import todoTasks from './task-list'
import moment from 'moment'
import store from '../store'

const genObjectByCat = (categories: string[]) => {
  const res = {}
  categories.forEach(c => {
    res[c] = todoTasks
      .filter(tt => tt.category.toLowerCase() === c.toLowerCase())
      .map(tt => Object.assign({}, tt, { selected: false }))
  })
  return res
}

const filterByNames = (names: string[]) => {
  return todoTasks.filter(tt => names.indexOf(tt.name) !== -1)
}

// Определяем показываемый день.
// ВНИМАНИЕ КОСТЫЛЬ! Берем первый элемент из массива, если это не ПЕРВЫЙ ДЕНЬ
const getShowedDay = (day: number) => {
  const currentDayNumber = moment().date()
  if (currentDayNumber > day) {
    const startOfNextMonth = moment().add(1, 'month').startOf('month')
    return moment(startOfNextMonth).date(day)
  } else {
    return moment().startOf('month').date(day)
  }
}

// добавляем showedDay
const addShowedDay = (tt: TodoTask): TodoTask => {
  if (tt.days) {
    const showedDayNumber: number = tt.days[0] === 1 ? tt.days[1] : tt.days[0]
    const showedDay: Date = getShowedDay(showedDayNumber).toDate()
    return {
      showedDay,
      name: tt.name,
      text: tt.text
    }
  } else {
    return tt
  }
}

// Сортируем задачи по дате по возрастанию
const sortTasks = (a: TodoTask, b: TodoTask) => {
  if (moment(a.showedDay).isBefore(moment(b.showedDay))) {
    return -1
  }
  if (moment(a.showedDay).isAfter(moment(b.showedDay))) {
    return 1
  }
  if (moment(a.showedDay).isSame(moment(b.showedDay))) {
    return 0
  }
}

// сортировка по дате и добавление поля showedDay
const normalizeTasks = (tasks: TodoTask[]): TodoTask[] => {
  return tasks.map(addShowedDay).sort(sortTasks)
}

const saveTasks = (tasks: TodoTask[]) => {
  const tasksForSave: TodoTask[] = normalizeTasks(tasks)
  return store.dispatch('updateUserPartial', {
    tasks: tasksForSave,
    tasksFrom: new Date()
  })
}

const getTasksByNames = (names: string[]) => {
  if (!names || names.length === 0) return []
  return filterByNames(names)
}

const isTaskInDay = (day: Day) => {
  const { date } = day
  const user = store.getters.user
  if (!user) {
    return false
  }
  const { tasksOnCalendar } = user
  if (tasksOnCalendar && tasksOnCalendar.length > 0) {
    const d = moment(date).startOf('day')
    let res = false
    tasksOnCalendar.forEach((t: TodoTask) => {
      res = res || moment(t.showedDay).startOf('day').isSame(d)
    })
    return res
  } else {
    return false
  }
}

const getTasksForDay = (day: Day) => {
  const user = store.getters.user
  if (!user && user.tasksOnCalendar) {
    return null
  }
  const d = moment(day.date).startOf('day')
  const res = user.tasksOnCalendar.filter(tt => {
    return moment(tt.showedDay).startOf('day').isSame(d)
  })
  return res.length > 0 ? res : null
}

export {
  genObjectByCat,
  saveTasks,
  getTasksByNames,
  isTaskInDay,
  getTasksForDay
}
