const NewStudent = require("../dbconnection");
const Studens = require("./Tables/Student")

const mymodel = {Studens} ;

const newcon = { };

newcon.mycon = NewStudent ;
NewStudent.newmodel = mymodel ;

module.exports = newcon