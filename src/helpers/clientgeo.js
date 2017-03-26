// @flow

import axios from 'axios'

const getClientGeo = () => {
  return axios.get('https://ipinfo.io/json')
}

export default getClientGeo
