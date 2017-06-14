import genObjectByCat from './helpers'
import store from '../store'

export const todoTasks = () => genObjectByCat(store.state.CATEGORIES)
