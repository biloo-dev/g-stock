module.exports = (seq, Type) =>
    seq.define('clients', {
        nom_prenom: Type.STRING,
        fidel: Type.BOOLEAN,
        type: Type.BOOLEAN,
        numeroPhoneList: Type.STRING,
        credit: Type.DECIMAL(10, 2), 
    });

//npx sequelize model:generate --name Clients --attributes nom_prenom:STRING,fidel:BOOLEAN,type:BOOLEAN,numeroPhoneList:STRING,credit:DECIMAL