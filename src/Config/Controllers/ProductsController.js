const log = require('electron-log');
 
module.exports = {
 async index(req, res, next) {
  try {
  
  } catch (err) {
    log.error( "historiquesController>>",err );
   next(err)
  }
 },
 async store(req, res, next) {
  try { 
    
  } catch (err) {
   log.error("historiquesController>>", err);
   next(err)
  }
 }
} 