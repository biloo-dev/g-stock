module.exports= (seq, Type) =>{
   let historiques = seq.define('historiques', {
        operateur: Type.INTEGER,
        Numero: Type.INTEGER,
        somme: Type.DECIMAL(10, 2),
        rest_somme: Type.DECIMAL(10, 2),
        somme_payee: Type.DECIMAL(10, 2),
        Reponse: Type.STRING,
        marge: Type.INTEGER,
        type: Type.BOOLEAN,
        status: Type.BOOLEAN,
        credit: Type.BOOLEAN, 
        id_client: Type.STRING,
        id_user: Type.BOOLEAN,
        
    });
     historiques.associate = function (models) {
         historiques.belongsTo(models.Company, {
             foreignKey: 'companyId',
             as: 'company'
         })
         historiques.belongsToMany(models.WorkingDay, {
             through: 'UsersWorkingDays',
             foreignKey: 'userId',
             as: 'days'
         })
     };
    return historiques
}

//npx sequelize model:generate --name Historiques --attributes operateur:INTEGER,Numero:INTEGER,somme:DECIMAL,rest_somme:DECIMAL,somme_payee:DECIMAL,Reponse:STRING,marge:INTEGER,type:BOOLEAN,status:BOOLEAN,credit:BOOLEAN,id_client:STRING,id_user:BOOLEAN