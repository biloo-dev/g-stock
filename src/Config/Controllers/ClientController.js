 
const log = require('electron-log');
const { clients, tresorerers } = require('../Models')
module.exports = {
 async index(req, res, next) {
  try { 
    let client = await clients.findAll({
     raw: true
    });

    res.send(client) 
  } catch (err) {
    log.error(err);
   next(err)
  }
 },
 async store({body}, res, next) {
  try { 
   let id = body.id 
   let data = {
    nom_prenom: body.nom_prenom,
    numeroPhoneList: JSON.stringify(body.numeroPhoneList),
    fidel: body.fidel ,
    type: body.type ,
    credit: 0
   } 
   if (id) {
    let client = await clients.update(data, {
     returning: true,
     where: {
      id: id
     }
    }) 
    res.send(client)
   }else {
    let client = await clients.create(data) 
    res.send(client)
   }
  } catch (err) {
   log.error(err);
   next(err)

  }
 },
 async reglreCredit({body,payload}, res, next) { 
  try {
   let tresorerer = await tresorerers.create({
    somme: body.somme_payee,
    rest_somme : body.rest_somme, 
    type : body.item.type,
    id_client: body.item.id,
    id_user: payload.aud,
   })
   let client = await clients.update({ credit : body.rest_somme },
   { returning: true, where: { id: body.item.id } })
   res.send(tresorerer)
  } catch (err) {
    log.error(err);
   next(err)
  }
 },
 async destroy({body}, res, next) {
  try {
   let id = body.id
   if (id) {
    let client = await clients.destroy({
     where: {
      id: id
     }
    })
    res.send("Successfully Deleted")
   } 
   
  } catch (err) {
    log.error(err);
   next(err)
  }
 }
}