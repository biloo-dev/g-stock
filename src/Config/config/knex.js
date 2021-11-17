const env = process.env.NODE_ENV || 'development' 
const conf = require('../knexfile')
const knex = require('knex')
const envConf = conf[env]

const connection = knex(envConf)

module.exports = connection

