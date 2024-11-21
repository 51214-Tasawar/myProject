const { DataTypes , Model } = require("sequelize") ;

const connection = require("../../dbconnection") ;

class Students extends Model { } ;

Students.init({
    StudentId :{
     primaryKey : true ,
     type :DataTypes.STRING
    },
    Studentname : {
        allowNull : false ,
        type : DataTypes.STRING
    },
    Studentemail : {
        allowNull :false ,
        type : DataTypes.STRING
    } ,
    password : {
        allowNull : false ,
        type : DataTypes.STRING 
    }
} ,
{
    name : "Students",
    paranoid : true ,
    timestamps : true ,
   sequelize : connection
}
)

module.exports = Students