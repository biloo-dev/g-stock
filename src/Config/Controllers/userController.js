const { users } = require('../Models')
const log = require('electron-log');
module.exports = {
 async index(err, res) {
  try {
   let user = await users.findAll()
   console.log('user :>> ', user);
   return user
  } catch (err) {
   console.log('err :>> ', err);
  }
 }
}