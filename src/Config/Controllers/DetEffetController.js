const log = require('electron-log');
const { Det_effet } = require('../Models')
const httpError = require('http-errors')
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
 }, 
 async update(req, res, next) {
  try { 
    
  } catch (err) {
   log.error("historiquesController>>", err);
   next(err)
  }
 },
 async delets(req, res, next) {
  try { 
    
  } catch (err) {
   log.error("historiquesController>>", err);
   next(err)
  }
 }
} 