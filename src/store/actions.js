import clientGeo from 'helpers/clientgeo'
import calendarTypes from 'lang/calendarTypes'

const actions = {
  loadClientInfo ({commit}) {
    clientGeo()
      .then(({data}) => {
        commit('SET_CLIENT_GEO', data)
      })
      .catch((err) => {
        throw err.message
      })
  },
  updateType ({commit, state}, type) {
    const allTypes = calendarTypes.map(({name}) => name).filter(name => name !== 'default')
    const newType = allTypes.includes(type) ? type : 'default'
    commit('SET_CURRENT_TYPE', newType)
  }
}

export default actions
