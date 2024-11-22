const { DataTypes , Model } = require("sequelize") ;

const connection = require("../../dbconnection") ;

class Students extends Model { } ;

Students.init({

    studentId :{
     primaryKey : true ,
     type :DataTypes.STRING
    },
    studentname : {
        allowNull : false ,
        unique : true ,
        type : DataTypes.STRING
    },
    studentemail : {
        unique : true ,
        allowNull :false ,
        type : DataTypes.STRING,
    } ,
    password : {
        allowNull : false ,
        type : DataTypes.STRING 
    }
} ,
{
    name : "Students",
    sequelize : connection,
    paranoid : true ,
    timestamps : true 
   
}
)

module.exports = Students