import axios from 'axios'

const devGeoData = {
  city: 'Amsterdam',
  country: 'NL',
  hostname: 'test.some.name',
  ip: '5.84.6.191',
  loc: '51.3700,6.1681',
  org: 'Some Hosting',
  postal: '5911',
  readme: 'https://ipinfo.io/missingauth',
  region: 'Limburg',
  timezone: 'Europe/Amsterdam'
}

const getClientGeo = () => {
  if (process.env.NODE_ENV === 'development') {
    return Promise.resolve({data: devGeoData})
  } else {
    return axios.get('https://ipinfo.io/json')
  }
}

export default getClientGeo
