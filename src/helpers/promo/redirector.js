import router from '../../router'
import store from '../../store'

function getFullPromoUrl (baseName) {
  return '/promo/' + baseName
}

const config = {
  biorhythms: getFullPromoUrl('biorhythms'),
  calc: getFullPromoUrl('calc'),
  todo: getFullPromoUrl('todo')
}

function isAuth () {
  return store.state.authorized === true
}

export function redirectToPromo (actionName) {
  if (isAuth.call(this)) {
    return false
  }
  const url = config[actionName.toLowerCase()]

  if (!url) {
    throw new Error(`Cannot get promo url for action=${actionName}`)
  }
  router.replace(url)
  return true
}

