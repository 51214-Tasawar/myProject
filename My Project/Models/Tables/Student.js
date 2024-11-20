const {DataTypes , Model} = require("sequelize")

class StudentTable extends Model { }

StudentTable.init(
    {
        StudentId : {
            primaryKey : true ,
            type : DataTypes.STRING
        },
        StudentName : {
            allowNull : false ,
            type : DataTypes.STRING
        },
        Studentemail : {
            unique : true ,
            allowNull : false,
            type : DataTypes.STRING
        },
        password : {
            allowNull : false ,
            type : DataTypes.STRING
        }
    },
    {
        name : "StudentTable" ,
        paranoid : true ,
        timestamps : true
    }
)

module.exports = StudentTable