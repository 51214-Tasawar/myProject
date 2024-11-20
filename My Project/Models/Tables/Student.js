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
        
    },{})