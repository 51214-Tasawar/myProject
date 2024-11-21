const express = require("express");
var bodyParser = require("body-parser");
const Morgan = require("morgan");

const studentroutes = require("./routes/Student")
const TeacherRout = require("./routes/Teacher") 
const adminRout = require("./routes/Admin")
const  newcon  =require("./Models/index")


const app  = express() ;

const port = 3001 ;

app.use (bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
app.use(Morgan("dev")) ;

app.use("/students" , studentroutes);
app.use("/Teachers" , TeacherRout);
app.use ("/admin" , adminRout);

app.use((req ,res)=>{
    res.send({
        code : 400 ,
        error : "Request not Found"
    })
})


newcon.mycon.sync({alter:true , logging : false}).then(()=>{
    console.log("My New Connection is Eastablished")
}).catch(()=>{
    console.log("Invalid Request Procced")
})


app.listen(port,()=>{
    console.log(`Testing The Programm at At the ${port}`)
})