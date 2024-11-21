const connection = require("../dbconnection");
const Students = require("./Tables/Student")
const adminTable = require("./Tables/admin")
const TeacherTable = require("./Tables/Teacher")

const model = {Students ,adminTable ,TeacherTable} ;

const dbconnection = { };

dbconnection.Studentconnection = connection ;
connection.model = model ;

module.exports = dbconnection