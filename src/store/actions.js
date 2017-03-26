// @flow

import clientGeo from '../helpers/clientgeo'
import calendarTypes from '../lang/calendarTypes'
import Vue from 'vue'

const actions = {
  loadClientInfo ({commit}: Function) {
    clientGeo()
      .then(({data}) => {
        commit('SET_CLIENT_GEO', data)
      })
      .catch((err) => {
        throw err.message
      })
  },
  updateType ({commit}: Function, type: string | void) {
    const allTypes = calendarTypes.map(({name}) => name).filter(name => name !== 'default')
    const newType = allTypes.includes(type) ? type : 'default'
    commit('SET_CURRENT_TYPE', newType)
    Vue.material.setCurrentTheme(type)
  }
}

export default actions
