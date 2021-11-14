const path = require('path')
const log = require('electron-log');

module.exports = {
 async getcontroller(name) { 
  try {
   let db = {}
   const req = require.context('../Controllers', true, /\.(js)$/i);
   req.keys().map(key => {
    const name = key.match(/\w+/)[0];
    db[name] = req(key)
   });
   return db[name]
  } catch (err) {
   log.error('err dddddd:>> ', err);
  }
 },

}