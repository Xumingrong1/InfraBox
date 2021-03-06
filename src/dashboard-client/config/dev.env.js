'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  DASHBOARD_HOST: '"localhost:8080"',
  NEW_API_PATH: '"http://localhost:8080/api/v1/"'
})
