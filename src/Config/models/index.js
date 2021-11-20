 
'use strict'
 
const knex = require('../config/knex') 
const log = require('electron-log');
const db = {} 
try {
    
    const req = require.context('./', true, /\.(js)$/i); 
    req.keys().map(key => {
        if (!~key.indexOf('index')) {
            const name = key.match(/\w+/)[0]; 
            db[name] = req(key)(knex)
        }
    }); 
    db.knex = knex
     
} catch (err) {
    log.error('err requirement Model :>> ' , err);
}

module.exports = db