function getFullPromoUrl (baseName) {
  return '/promo/' + baseName
}

const config = {
  biorhythms: getFullPromoUrl('biorhythms'),
  calc: getFullPromoUrl('calc'),
  todo: getFullPromoUrl('todo')
}

function isAuth () {
  return this.$store.state.authorized === true
}

export function redirectToPromo (actionName) {
  if (isAuth.call(this)) {
    return false
  }
  const url = config[actionName.toLowerCase()]

  if (!url) {
    throw new Error(`Cannot get promo url for action=${actionName}`)
  }
  this.$router.replace(url)
  return true
}

