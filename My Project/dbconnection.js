const { Sequelize } = require("sequelize")

const Studentdb = new Sequelize({
   host : process.env.DBHOST ,
   port : process.env.DBPORT ,
   username : process.env.DBUSERNAME ,
   database : process.env.DBNAME ,
   password : process.env.DBPASSWORD ,
   dialect : process.env.dialect
})

module.exports = Studentdb 