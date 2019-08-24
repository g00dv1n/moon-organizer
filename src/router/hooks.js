import store from '../store'
import router from './index'

export function checkRigths (to, from, next) {
  if (store.state.authorized === false) {
    router.replace({name: 'registration'})
  } else {
    next()
  }
}

export function setCategory (to, from, next) {
  store.dispatch('updateType', to.params.category)
  next()
}
