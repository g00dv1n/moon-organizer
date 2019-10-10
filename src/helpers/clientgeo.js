import axios from 'axios'

const devGeoData = {
  ip: '31.43.145.164',
  hostname: 'nastya.corbina.com.ua',
  city: 'Kyiv',
  region: 'Kyiv City',
  country: 'UA',
  loc: '50.4547,30.5238',
  org: 'AS48438 Corbina Telecom Llc.',
  postal: '03027',
  readme: 'https://ipinfo.io/missingauth'
}

const getClientGeo = () => {
  if (process.env.NODE_ENV === 'development') {
    return Promise.resolve({data: devGeoData})
  } else {
    return axios.get('https://ipinfo.io/json')
  }
}

export default getClientGeo
