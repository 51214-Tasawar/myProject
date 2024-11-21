const connection = require("../dbconnection");
const Students = require("./Tables/Student")
const adminTable = require("./Tables/admin")

const model = {Students ,adminTable } ;

const dbconnection = { };

dbconnection.Studentconnection = connection ;
connection.model = model ;

module.exports = dbconnection