const log = require('electron-log');
 
module.exports = {
 async index(req, res, next) {
  
 },
 async update(req, res, next) {
  try {
    
  } catch (err) {
   console.log('err :>> ', err);
   next(err)
  }
 }
}