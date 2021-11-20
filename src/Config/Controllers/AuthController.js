const { users, settings, clients } = require('../Models')
const httpError = require('http-errors') 
const path = require('path')
const { signAccessToken, compare, hash  } = require('../Helpers/jwt_helper.js');
const log = require('electron-log'); 
// import settings from 'electron-settings';
module.exports = {
 async login(req, res, next) {
  try {  
    let usedr = await knex('user') 
   let { email, password } = req.body
   let user = await users.findOne({ where: { email: email } })
   throw "ERROR"
   if (!user || !compare(password, user.dataValues.password)) {
   }
   let lifeTime = "6h"
   if (req.body.remeberMe) {
    lifeTime = "1d"
   }
   let accessToken = await signAccessToken(lifeTime,user.dataValues.id)
   req.auth = user
   res.send({
    user: user.dataValues,
    accessToken: accessToken
   })
  } catch (err) { 
   log.error("AuthController>>", err);
   next(err)
  }
 },
 async virifayToken(req, res, next) {

  try {  
   let Users = await users.findOne({
    where: {
     id: req.payload.aud
    }
   });
   if (!Users) {
    Users = await users.create({
     email: "admin",
     fullName: "administrator",
     password: (await hash("admin123")).toString(),
    });
   }
   res.send(Users)
  } catch (err) {
    log.error("AuthController>>", err);
   next(err)
   // next(httpError.Unauthorized())
  }
 },
 async autoSeed(req, res, next) {
  try {
   let Users = await users.count();
   if (!Users) {
    Users = await users.create({
     email: "admin",
     fullName: "administrator",
     password: (await hash("admin123")).toString(),
    });
   }
   let setting = await settings.count();
   if (!setting) {
    setting = await settings.bulkCreate([{
      codeTrensfert: '760',
      typeOperator: '1',
      codeSolde: '766',
      codeInternational: '760',
      codePin: '00000',
      codeFacteur: '761',
      MsgIntTrn1: 'VOUS VOULEZ',
      MsgCnfTrn1: 'TRANSFERE DE VOTRE',
      MsgIntTrn2: 'VOUS VOULEZ',
      MsgCnfTrn2: 'VOUS VENEZ DE TRANSF',
      MsgIntTrn3: '1:MILLENIUM 1200',
      MsgCnfTrn3: 'EST ACTUELLEMENT EN COURS',
      autoConfirmation: 1,
      regexConsultation: 'VOTRE SOLDE EST (.*?)\s',
      buttonList: JSON.stringify(
       [{
         id: 1,
         title: "100",
         marge: "10"
        },
        {
         id: 2,
         title: "150",
         marge: "10"
        },
        {
         id: 3,
         title: "200",
         marge: "10"
        },
        {
         id: 4,
         title: "250",
         marge: "10"
        },
        {
         id: 5,
         title: "300",
         marge: "10"
        },
        {
         id: 6,
         title: "40",
         marge: "10"
        },
        {
         id: 7,
         title: "500",
         marge: "10"
        },
        {
         id: 8,
         title: "1000",
         marge: "20"
        },
       ]
      ),
      margeSome: JSON.stringify({}),
      autoDetectUSB: 1,
      audioEnabled: 1,
      audioSpeed: 1,
      audioPerson: 'none',
      confYes: 1,
      confNo: 2,
     },
     {
      codeTrensfert: '630',
      typeOperator: '2',
      codeSolde: '632',
      codeInternational: '666',
      codePin: '00000',
      codeFacteur: '633',
      autoConfirmation: 1,
      MsgIntTrn1: 'VOUS VOULEZ',
      MsgCnfTrn1: 'TRANSFERE DE VOTRE',
      MsgIntTrn2: 'VOUS VOULEZ',
      MsgCnfTrn2: 'VOUS VENEZ DE TRANSF',
      MsgIntTrn3: 'VOUS VOULEZ',
      MsgCnfTrn3: 'VOUS AVEZ TRANSF',
      regexConsultation: '/Votre balance Arselli est  (.*?)\s/',
      buttonList: JSON.stringify([{
        id: 1,
        title: "100",
        marge: "10"
       },
       {
        id: 2,
        title: "150",
        marge: "10"
       },
       {
        id: 3,
        title: "200",
        marge: "10"
       },
       {
        id: 4,
        title: "250",
        marge: "10"
       },
       {
        id: 5,
        title: "300",
        marge: "10"
       },
       {
        id: 6,
        title: "40",
        marge: "10"
       },
       {
        id: 7,
        title: "500",
        marge: "10"
       },
       {
        id: 8,
        title: "1000",
        marge: "20"
       },
      ]),
      margeSome: JSON.stringify({}),
      autoDetectUSB: 1,
      audioEnabled: 1,
      audioSpeed: 1,
      audioPerson: 'none',
      confYes: 1,
      confNo: 0,
     },
     {
      codeTrensfert: '580',
      typeOperator: '3',
      codeSolde: '570',
      codeInternational: '580',
      codePin: '00000',
      codeFacteur: "585",
      autoConfirmation: 1,
      MsgIntTrn1: 'VOUS VOULEZ',
      MsgCnfTrn1: 'TRANSFERE DE VOTRE',
      MsgIntTrn2: 'MAXY HAYA',
      MsgCnfTrn2: 'OK num',
      MsgIntTrn3: 'MAXY HAYA',
      MsgCnfTrn3: 'OK num',
      regexConsultation: 'Votre credit storm-credit est (.*)\s',
      buttonList: JSON.stringify([{
        id: 1,
        title: "100",
        marge: "10"
       },
       {
        id: 2,
        title: "150",
        marge: "10"
       },
       {
        id: 3,
        title: "200",
        marge: "10"
       },
       {
        id: 4,
        title: "250",
        marge: "10"
       },
       {
        id: 5,
        title: "300",
        marge: "10"
       },
       {
        id: 6,
        title: "40",
        marge: "10"
       },
       {
        id: 7,
        title: "500",
        marge: "10"
       },
       {
        id: 8,
        title: "1000",
        marge: "20"
       },
      ]),
      margeSome: JSON.stringify({}),
      autoDetectUSB: 1,
      audioEnabled: 1,
      audioSpeed: 1,
      audioPerson: 'none',
      confYes: 1,
      confNo: 2,
     },
    ]);
   }
   let client = await clients.count();
   if (!client) {
    client = await clients.bulkCreate([{
      nom_prenom: 'Client inconnu',
      fidel: 0,
      type: 2,
      numeroPhoneList: JSON.stringify([{num:''}]),
      credit: 0
     },
     {
      nom_prenom: 'Ressource inconnue',
      fidel: 0,
      type: 1,
      numeroPhoneList: JSON.stringify([{num:''}]),
      credit: 0
     }
    ])
   }
   res.send({ Users,  client, setting })
  } catch (err) {
   log.error("AuthController>>", err);
   next(err)
   // next(httpError.Unauthorized())
  }
 },
 async Register(res, req) {
  try {
   let user = await users.create({
    email: req.email,
    fullName: "Biloo",
    password: (await hash(req.password)).toString(),
   })
   let accessToken = await signAccessToken(user.dataValues.id)
   return {
    status: 200,
    data: {
     user: user.dataValues,
     accessToken: accessToken
    }
   }
  } catch (err) {
   return {
    status: 403,
    error: err
   }
  }
 }

}