const {DataTypes , Model} = require("sequelize");

const connection = require("../../dbconnection");


class Students extends Model { };

Students.init(
    {
        studentId : {
            primaryKey : true ,
            type : DataTypes.STRING(100)
        },
        studentname:{
            unique : true ,
            type : DataTypes.STRING(10),
            allowNull : false
        },
        studentemail: {
            allowNull : false ,
            type : DataTypes.STRING(100),
        },
        password  :{
            allowNull : false ,
            type : DataTypes.STRING(1000)
        }
    },{
        name : "Students" ,
        timestamps : true ,
        paranoid : true ,
        sequelize : connection
    })

    module.exports = Students ;