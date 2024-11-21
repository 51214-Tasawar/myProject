require("dotenv").config()

const {Sequelize} = require("sequelize")

const connection = new Sequelize({
host : process.env.DBHOST ,
password : process.env.DBPASSWORD ,
database : process.env.DBNAME ,
port : process.env.DBPORT ,
username : process.env.DBUSERNAME ,
dialect : process.env.DBDIALECT
})

module.exports = connection