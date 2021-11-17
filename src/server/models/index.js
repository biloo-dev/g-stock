'use strict'

const fs = require('fs')
const path = require('path')
const knex = require('../config/database') 
const db = {}
try {
  
  const req = require.context('./', true, /\.(js)$/i);
  req.keys().map(key => {
    if (!~key.indexOf('index')) {
      const name = key.match(/\w+/)[0];
      console.log('name :>> ', name);
      db[name] = req(key)(knex)
    }
  }); 
  db.knex = knex
} catch (err) {
  console.log('err :>> ', err); 
}

module.exports = db
