module.exports= (seq, Type) =>{
   let tresorerers = seq.define('tresorerers', {
        somme: Type.DECIMAL,rest_somme: Type.DECIMAL,id_hist: Type.INTEGER,type: Type.BOOLEAN,id_client: Type.INTEGER,id_user: Type.INTEGER,
        
    });
     tresorerers.associate = function (models) {
         tresorerers.belongsTo(models.Company, {
             foreignKey: 'companyId',
             as: 'company'
         })
         tresorerers.belongsToMany(models.WorkingDay, {
             through: 'UsersWorkingDays',
             foreignKey: 'userId',
             as: 'days'
         })
     };
    return tresorerers
}

//npx sequelize model:generate --name Tresorerers --attributes somme:DECIMAL,rest_somme:DECIMAL,id_hist:INTEGER,type:BOOLEAN,id_client:INTEGER,id_user:INTEGER