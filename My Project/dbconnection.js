require("dotenv").config()

const {Sequelize} = require("sequelize")

const connection = new Sequelize({
host : process.env.DBHOST ,
username : process.env.DBUSERNAME ,
database : process.env.DBNAME ,
password : process.env.DBPASSWORD ,
port : process.env.DBPORT ,
dialect : process.env.DBDIALECT
})

module.exports = connection