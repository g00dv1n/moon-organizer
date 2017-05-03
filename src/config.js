// @flow

const development = {
  API_ROOT: 'http://localhost:8090/'
}

const production = {
  API_ROOT: 'https://moonorganizer.com/'
}

const configurations = {development, production}

const getConfig = () => configurations[process.env.NODE_PATH || 'development']

export default getConfig()
