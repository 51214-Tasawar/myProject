const {DataTypes , Model} = require("sequelize") 

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
        timestamps: true
    }
)