const express = require("express")

const studentroutes = require("./routes/Student")

const app  = express() ;

const port = 3001 ;

app.listen(port,()=>{
    console.log(`Testing The Programm at At the ${port}`)
})