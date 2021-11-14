const jwt = require('jsonwebtoken') 
const Promise = require('bluebird')
const log = require('electron-log')
const bcrypt = Promise.promisifyAll(require('bcrypt'))
const config = require('../config/config')
 
module.exports = {
 compare(oldPAss, newPass) {
  return bcrypt.compareSync(oldPAss, newPass)
 },
 async hash(value) {
  const SALT_FUCTOR = 10
  let salt = await bcrypt.genSalt(SALT_FUCTOR)
  return await bcrypt.hash(value, salt, null)
 },
 signAccessToken: (lifeTime, uid) => {
  return new Promise((resolve, reject) => {
   const leyLoad = {}  
   const secret = config.auth.ACCESS_TOKEN_SECRET
   const options = {
    expiresIn: lifeTime || config.auth.ISSUER,
    issuer: config.auth.ISSUER,
    audience: uid + ""
   }
   jwt.sign(leyLoad, secret, options, (err, token) => {
    log.error(err);
    if (err) return 
    resolve(token)
   })
  })
 },
 
}