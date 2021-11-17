 
const Sequelize = require('sequelize')
const config = require('../config/config')
const log = require('electron-log');
const db = {}
const sequelize = new Sequelize( config.db.database,  config.db.user, config.db.password, config.db.options  ) 
 
try {
    
    const req = require.context('./', true, /\.(js)$/i); 
    req.keys().map(key => {
        if (!~key.indexOf('index')) {
            const name = key.match(/\w+/)[0];
            db[name] = req(key)(sequelize, Sequelize.DataTypes)
        }
    });
    db.sequelize = sequelize
    db.Sequelize = Sequelize
     
} catch (err) {
    log.error('err requirement Model :>> ' , err);
}

module.exports = db