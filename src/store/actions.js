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
    Vue.material.setCurrentTheme(newType)
  },
  login ({state}: Object, {email, password}: Object) {
    if (!email || !password) throw new Error('Cannot get email or password in login action')

    async function auth () {
      const res = await state.axios.post('/api/public/auth', {email, password})
      const {data} = res
      if (!data) throw new Error('Cannot get data from response in login action')
      if (!data.jwt) throw new Error('Cannot get token (data.jwt) from response.data in login action')
      state.token = data.jwt
      state.authorized = true
      // set header
      state.axios.defaults.headers.common['Authorization'] = `Bearer ${data.jwt}`
      // set token to Local Storage
      state.storageToken = data.jwt
      return Promise.resolve(res)
    }

    return auth()
  }
}

export default actions
