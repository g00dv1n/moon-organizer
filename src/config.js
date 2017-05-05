// @flow

const development = {
  API_ROOT: 'http://localhost:8090/api/'
}

const production = {
  API_ROOT: 'https://moonorganizer.com/api/'
}

const configurations = {development, production}

const getConfig = () => configurations[process.env.NODE_ENV || 'development']

export default getConfig()
