const {DataTypes , Model} = require("sequelize") 
const { } = require("../../dbconnection");
const connection = require("../../dbconnection");

class TeacherTable extends Model { } ;

TeacherTable.init(
    {
        TeacherId :{
            primaryKey : true ,
            type : DataTypes.STRING
        },
        Teachername: {
            allowNull : false ,
            type : DataTypes.STRING
        },
        Teacheremail :{
            allowNull: false ,
            unique : true ,
            type : DataTypes.STRING
        },
        password : {
            allowNull : false ,
            type : DataTypes.STRING
        }
    } ,
    
    {
        name : "TeacherTable",
        paranoid : true ,
        timestamps: true ,
        sequelize : connection
    }
)

module.exports = TeacherTable ;