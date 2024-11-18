const express = require("express");
var bodyParser = require("body-parser");

const studentroutes = require("./routes/Student")
const TeacherRout = require("./routes/Teacher") 
const adminRout = require("./routes/Admin")

const app  = express() ;

const port = 3001 ;

app.use (bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

app.use("/students" , studentroutes);
app.use("/Teachers" , TeacherRout);
app.use ("/admin" , adminRout);




app.listen(port,()=>{
    console.log(`Testing The Programm at At the ${port}`)
})