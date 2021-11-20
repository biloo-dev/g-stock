const log = require('electron-log');
const { Caisse } = require('../Models')
const httpError = require('http-errors')
const { body, validationResult } = require('express-validator');
module.exports = {
 async index(req, res, next) {
  try {
    let caisse = await Caisse.findAll()
    console.log('caisse :>> ', caisse);
    res.json({caisse})
  } catch (err) {
    log.error( "historiquesController>>",err );
   next(err)
  }
 },
 async store({ body }, res, next) {
  try { 
    let { name, solde } = body
    console.log('name, solde :>> ', name, solde);
    let caisse = await Caisse.create(body)
    console.log('caisse :>> ', caisse);
    res.json(caisse)
  } catch (err) {
   log.error("historiquesController>>", err);
   next(err)
  }
 }, 
 async update(req, res, next) {
   try {
     let { name, solde , id } = body
     console.log('name, solde :>> ', name, solde);
     let caisse = await Caisse.update(body ,body.id)
     console.log('caisse :>> ', caisse);
     res.json(caisse)
   } catch (err) {
     log.error("historiquesController>>", err);
     next(err)
   }
 },
 async delete({ body }, res, next) {
  try { 
    await Project.destroy(body.id)
    res.json({ status : 200 , message : "successfully deleted !"})
  } catch (err) {
   log.error("historiquesController>>", err);
   next(err)
  }
 }
} 