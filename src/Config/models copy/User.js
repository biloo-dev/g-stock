 

module.exports = (sequelize,DataTypes)=>
    sequelize.define('User', {
        fullName: DataTypes.STRING,
        username: {
            type: DataTypes.STRING,
            unique: true
        },
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        password: DataTypes.STRING
    });

    
