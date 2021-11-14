const log = require('electron-log');
const { settings } = require('../Models')
module.exports = {
 async index(req, res, next) {
  let setting = await settings.findAll({
   raw: true
  }); 
  res.send(setting)
 },
 async update(req, res, next) {
  try {
   let id = req.body.id
   console.log('id :>> ', id);
   let Settings = await settings.update(req.body, {
    returning: true,
    where: {
     id: id
    }
   })
   res.send(Settings);

  } catch (err) {
   console.log('err :>> ', err);
   next(err)
  }
 }
}