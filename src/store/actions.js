// @flow

import clientGeo from '../helpers/clientgeo'
import calendarTypes from '../lang/calendarTypes'
import Vue from 'vue'

const actions = {
  loadClientInfo ({commit}: Function) {
    return clientGeo()
      .then(({data}) => {
        commit('SET_CLIENT_GEO', data)
        return data
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
  showTooltips ({commit, getters}) {
    const EnjoyHint = window.EnjoyHint
    const constants = getters.constants

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

    // end of the game :)
    commit('SET_NOT_FIRST_TIME', 'yes')
  }

}

export default actions
