const log = require('electron-log');
const { Product } = require('../Models')
const httpError = require('http-errors')
const { body, validationResult } = require('express-validator');
const multer = require('multer')
const upload = multer().single('img')
module.exports = {
 async index({ body }, res, next) {
  try {
    let product = await Product.findAll();
    return res.json(product)
  } catch (err) {
    log.error( "historiquesController>>",err );
   next(err)
  }
 },
 async store({ body }, res, next) {
  try { 
    upload(req, res, function (err) {
      if (err instanceof multer.MulterError) {
        console.log('err',err)
        // A Multer error occurred when uploading.
      } else if (err) {
        console.log('err',err)
        // An unknown error occurred when uploading.
      }
      
      // Everything went fine.
    })
    let product = await Product.create(body)

  } catch (err) {
   log.error("historiquesController>>", err);
   next(err)
  }
 }
} 