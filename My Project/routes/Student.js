const  studentroutes = require("express").Router();

const {addStudent , getStudent , updateStudent , DeleteStudent} = require("../Controller/Studentcontroller")

studentroutes.post("/addStudent" , addStudent)
studentroutes.get("/getStudent" , getStudent)
studentroutes.patch("/updateStudent" , updateStudent)
studentroutes.delete("/DeleteStudent" , DeleteStudent)

module.exports = studentroutes