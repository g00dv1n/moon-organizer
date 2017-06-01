const userNormalizer = (user) => {
  const newUser = Object.assign({}, user)
  if (newUser.categories && Array.isArray(newUser.categories)) {
    newUser.categories = newUser.categories
      .map(c => c.toLowerCase())
      .join(';')
  }
  return newUser
}

export default userNormalizer
