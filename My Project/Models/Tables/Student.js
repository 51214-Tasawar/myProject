const { DataTypes , Model } = require("sequelize") ;
 
const NewStudent = require("../../dbconnection")

class Studens extends  Model { } ;

Studens.init({
    StudentId : {
        primaryKey : true ,
        type : DataTypes.STRING 
    },
    Studentname:{
        allowNull : false ,
        type : DataTypes.STRING
    } ,
    Studentemail :{
        allowNull : false ,
        type : DataTypes.STRING,
    },
    password :{
        allowNull : false ,
        type : DataTypes.STRING
    }
}, {
    name : "Studens",
    paranoid: true ,
    timestamps : true ,
     sequelize : NewStudent
})

module.exports = Studens
