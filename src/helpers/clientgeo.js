/**
 * Created by g00dv1n on 12.03.17.
 */
import axios from 'axios'

const getClientGeo = () => {
  return axios.get('https://ipinfo.io/json')
}

export default getClientGeo
