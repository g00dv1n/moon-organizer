import clientGeo from 'helpers/clientgeo'

const actions = {
  loadClientInfo ({commit}) {
    clientGeo()
      .then(({data}) => {
        commit('SET_CLIENT_GEO', data)
      })
      .catch((err) => {
        throw err.message
      })
  }
}

export default actions
