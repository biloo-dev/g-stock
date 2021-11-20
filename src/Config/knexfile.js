
const isElectron = require('is-electron');

const env = process.env.NODE_ENV || 'development'
const path = require('path')
let dbPath = path.join(__dirname, '../src/config/db', "db.sqlite3")
if (!isElectron()) {
  dbPath = './db/db.sqlite3'
} 
module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: dbPath
    },
    seeds: {
      directory: './seeds'
    },
    useNullAsDefault: true
  },
  production: {
    client: 'sqlite3',
    connection: {
      filename: dbPath
    },
    useNullAsDefault: true
  },

};