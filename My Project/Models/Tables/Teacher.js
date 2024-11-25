const {DataTypes , Model} = require("sequelize") 

const connection = require("../../dbconnection");

class TeacherTable extends Model { } ;

TeacherTable.init (
    {
        TeacherId :{
        primaryKey : true ,
        type : DataTypes.STRING
    },
    name: {
        allowNull : false ,
        type : DataTypes.STRING
    },
    username :{
        allowNull: false ,
        unique : true ,
        type : DataTypes.STRING
    },
    password : {
        allowNull : false ,
        type : DataTypes.STRING
    }
},
{
    name : "TeacherTable",
    paranoid : true ,
    timestamps: true ,
    sequelize : connection
}
)

module.exports = TeacherTable ;