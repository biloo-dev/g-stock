 
 
const {app} = require('electron') 
const log  = require('electron-log')
let Userpath = app.getPath('userData') 
let dbPath = Userpath + '/db' 
module.exports = {
    port: 3333 ,
    db : {
        database : 'Flexy',
        user: 'Flexy',
        password: 'Flexy',
        options : { 
            logging: false,//msg => log.info(msg),
            dialect: 'sqlite',
            host: 'localhost',
            storage: dbPath + '/Flexy.sqlite'
        },
    },
    auth : {
        ACCESS_TOKEN_SECRET : '3d6dc75dcc4859ac561b5e9507669e79b14074bb97eb551b0c19b1f326a54f08',
        REFRESH_TOKEN_SECRET : 'f4ca4654303d46ee0d03f7bd2478301cada98b673aa3e91b5d22698dc52178d7',
        ISSUER :'voisinagepc.com',
        EXPIRESIN : '1h',
    }
}