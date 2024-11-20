const { DataTypes , Model } = require("sequelize")

class adminTable extends Model { } ;

adminTable.init( 
    {
        adminId : {
            primaryKey : true ,
            type : DataTypes.STRING
        },
        name : {
            allowNull : false ,
            type : DataTypes.STRING
        } ,
        username : {
            allowNull : false ,
            unique : true ,
            type : DataTypes.STRING
        },
        password : {
            allowNull : false ,
            type : DataTypes.STRING
        }
    }, 
    {
          name :  "adminTable" ,
          paranoid : true ,
          timestamps : true
    })

    module.exports = adminTable ;