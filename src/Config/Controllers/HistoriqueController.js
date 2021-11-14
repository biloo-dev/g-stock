const log = require('electron-log');
const { historiques,tresorerers,users,clients } = require('../Models')

historiques.belongsTo(clients, { 
 foreignKey: 'id_client'
})
historiques.belongsTo(users, {
 foreignKey: 'id_user'
})
module.exports = {
 async index(req, res, next) {
  try {
   let historique = await historiques.findAll({ 
     order: [
       // Will escape title and validate DESC against a list of valid direction parameters
       ['id', 'DESC'],
    ],
    include: clients,
    raw: true, 
   });
   res.send(historique)
  } catch (err) {
    log.error( "historiquesController>>",err );
   next(err)
  }
 },
 async store(req, res, next) {
  try { 
   let historique = await historiques.create({
     operateur:req.body.operateur,
     Numero:req.body.Numero,
     somme:req.body.somme,
     somme_payee:req.body.somme_payee,
     rest_somme:req.body.rest_somme,
     Reponse:req.body.Reponse,
     marge:req.body.marge,
     credit:req.body.credit,
     id_user: req.payload.aud,
     id_client: req.body.id_client.id,
     status:req.body.status,
     type:req.body.type
   })
   let tresorerer = await tresorerers.create({
    somme: req.body.somme_payee,
    rest_somme: req.body.rest_somme,
    id_hist: historique.id,
    type: 0,
    id_client: req.body.id_client.id,
    id_user: req.payload.aud,
   })
   if (req.body.rest_somme > 0) {
    let client = await clients.update({
     credit: req.body.rest_somme
    }, {
     returning: true,
     where: {
      id: req.body.id_client.id
     }
    }) 
   }
   res.send(historique)
  } catch (err) {
   log.error("historiquesController>>", err);
   next(err)
  }
 }
} 