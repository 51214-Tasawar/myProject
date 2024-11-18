const express = require("express")

const studentroutes = require("./routes/Student")
const TeacherRout = require("./routes/Teacher") 

const app  = express() ;

const port = 3001 ;

app.use("/students" , studentroutes);
app.use("/Teachers" , TeacherRout);

app.listen(port,()=>{
    console.log(`Testing The Programm at At the ${port}`)
})