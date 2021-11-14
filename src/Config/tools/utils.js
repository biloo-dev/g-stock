 
const util = require('../tools/getControllers');
const log = require('electron-log');
const jwt = require('jsonwebtoken')
const httpError = require('http-errors')
const express = require('express')
const config = require('../config/config')
const { session } = require('electron'); 
const bodyParser = require('body-parser')
var cors = require('cors');
const app = express()
app.use(bodyParser.urlencoded({
 extended: false
}))
app.use(bodyParser.json())
const PORT = config.port || 3333
app.use(cors("Access-Control-Allow-Origin: *"));
app.listen(PORT, () => {
 log.info(`Server is runing on port : ${PORT}`);
})
module.exports = {
 async post(url, controller) { 
  try {
   let contName = controller.split('@')[0]
   let method = controller.split('@')[1]
   let cont = await util.getcontroller(contName)
   if (cont && cont[method]) {
    app.post(url, this.checkAuthMeddelware, cont[method])
   }
  } catch (err) {
   log.error("Route Controller", err);
  }
 },
 async get(url, controller) {
  try {
   let contName = controller.split('@')[0]
   let method = controller.split('@')[1]
   let cont = await util.getcontroller(contName)
   if (cont && cont[method]) {
    app.post(url, cont[method])
   }
  } catch (err) {
   log.error("Route Controller", err);
  }
 },
 async checkAuthMeddelware(req, res, next) {
  let coockies = await session.defaultSession.cookies.get({
     url: 'http://localhost',
     name: 'token',
    })  
    let token = coockies && coockies[0] ? coockies[0].value : 'dsdfs' 
    jwt.verify(token, config.auth.ACCESS_TOKEN_SECRET, (err, payload) => {
     
     if (err) {
      log.error(err); 
      next(httpError.Unauthorized('Unauthorized'))
     } else {
      req.payload = payload
      next()
     }
    })

 },
}