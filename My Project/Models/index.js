const connection = require("../dbconnection");
const Students = require("./Tables/Student")

const model = {Students} ;

const dbconnection = { };

dbconnection.Studentconnection = connection ;
connection.model = model ;

module.exports = dbconnection