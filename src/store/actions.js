import clientGeo from '../helpers/clientgeo'
import calendarTypes from '../lang/calendarTypes'
import Vue from 'vue'
import mutationTypes from './mutationTypes'

const actions = {
  loadClientInfo ({commit}) {
    return clientGeo()
      .then(({data}) => {
        commit('SET_CLIENT_GEO', data)
        return data
      })
      .catch((err) => {
        throw err.message
      })
  },
  sendReview ({state}, {rate, feedback, id}) {
    const url = 'public/review'
    return state.axios.post(url, {rate, feedback, id})
      .then(({data}) => {
        console.log(data)
        state.isLeaveFeedback = 'yes'
        return Promise.resolve(data)
      })
      .catch((err) => {
        console.error(err)
        return Promise.reject(err)
      })
  },
  getReviews ({state}) {
    const url = 'public/reviews'
    return state.axios.get(url)
  },
  updateType ({commit}, type) {
    const allTypes = calendarTypes.map(({name}) => name).filter(name => name !== 'default')
    const newType = allTypes.includes(type) ? type : 'default'
    commit('SET_CURRENT_TYPE', newType)
    Vue.material.setCurrentTheme(newType)
  },
  showTooltips ({state, getters}) {
    const EnjoyHint = window.EnjoyHint
    const constants = getters.constants
    state.router.push({name: 'default'})

    const enjoyhint = new EnjoyHint({})

    const steps = [
      {
        'next .logo': constants.step1,
        'shape': 'circle',
        'nextButton': {className: 'next-btn', text: constants.ok},
        'skipButton': {className: 'skip-btn', text: constants.skip}
      },
      {
        'click .cell': constants.step2,
        'showSkip': false
      },
      {
        'next .day-title': constants.step3,
        'nextButton': {className: 'next-btn', text: constants.ok},
        'showSkip': false
      },
      {
        'next .pre-last': constants.step4,
        'nextButton': {className: 'next-btn', text: constants.gotIt},
        'showSkip': false
      },
      {
        'click .md-button.md-theme-default.md-primary.category:nth-child(2)': constants.step5,
        'nextButton': {className: 'next-btn', text: constants.ok},
        'showSkip': false
      },
      {
        'click .glyphicon-arrow-right.month-changer': constants.step6,
        'showSkip': false
      },
      {
        'click .cell': constants.step7,
        'timeout': 500,
        'showSkip': false
      },
      {
        'click #modal-ok': constants.step8,
        'showSkip': false
      },
      {
        'click .md-button.md-primary.category:nth-child(1)': constants.step9,
        'nextButton': {className: 'next-btn', text: constants.ok},
        'showSkip': false
      },
      {
        'next .logo': constants.step10,
        'shape': 'circle',
        'nextButton': {className: 'next-btn', text: constants.thanks},
        'showSkip': false
      }
    ]

    enjoyhint.set(steps)

    enjoyhint.run()
  },
  showDayTooltip ({commit, getters}) {
    const EnjoyHint = window.EnjoyHint
    const constants = getters.constants

    const enjoyhint = new EnjoyHint({
      onEnd () {
        // end of the game :)
        commit('SET_NOT_FIRST_TIME', 'yes')
      }
    })

    const steps = [

      {
        'click .cell.today': constants.step2,
        'showSkip': false
      }
    ]

    enjoyhint.set(steps)

    enjoyhint.run()
  },
  login ({state}, {email, password}) {
    if (!email || !password) throw new Error('Cannot get email or password in login action')

    return (async () => {
      const res = await state.axios.post('/public/auth', {email, password})
      const {data} = res
      if (!data) throw new Error('Cannot get data from response in login action')
      if (!data.jwt) throw new Error('Cannot get token (data.jwt) from response.data in login action')
      state.token = data.jwt
      state.authorized = true
      return Promise.resolve(res)
    })()
  },
  getUser ({state}) {
    return state.axios.get('/private/user/').then(({data}) => Promise.resolve(data))
  },
  updateUser ({state, commit}, newUser) {
    return state
      .axios
      .post('/private/user/', newUser)
      .then(({data}) => {
        commit(mutationTypes.SET_USER, newUser)
        return Promise.resolve(data)
      })
  },
  updateUserPartial ({state, dispatch}, fieldData) {
    let u = JSON.parse(JSON.stringify(state.user))
    if (fieldData) {
      u = Object.assign({}, u, fieldData)
      dispatch('updateUser', u)
    }
  },
  checkAuth ({state, dispatch}) {
    return (async () => {
      const token = state.token
      state.axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
      try {
        const user = await dispatch('getUser')
        if (user) {
          state.authorized = true
          state.user = user
          state.personal = true
          console.log('User:')
          console.log(JSON.parse(JSON.stringify(user)))
        }
      } catch (err) {
        console.error(err)
      }
    })()
  },
  putAvatar ({state, getters}, file) {
    const data = new FormData()
    const axios = state.axios
    data.append('file', file)
    return axios.put('/private/avatar', data)
      .then(({data}) => {
        if (!data || !data.avatarUrl) {
          throw new Error('cannot get avatarUrl')
        }
        state.user.avatarUrl = data.avatarUrl
        return Promise.resolve(getters.userAvatar)
      })
  },
  resetPassword ({state}, email) {
    const axios = state.axios
    const lang = state.locale
    return axios.post('/public/reset-password', {email, lang})
  },
  async setupPrice ({state}) {
    const axios = state.axios
    const {country} = state.geo
    const res = await axios.get('/purchase/price/' + country)
    state.productInfo = res.data
    console.log(res.data)
    return true
  }
}

export default actions
