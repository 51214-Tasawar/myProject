const  studentroutes = require("express").Router();
const {addStudent
     ,getStudent,
      updateStudent,
      DeleteStudent} = require("../Controller/Studentcontroller")
      const {
        Create,
        Update ,
        getDelete
    } =require("../Validator/studentvalidator")
studentroutes.post("/addStudent" , Create ,addStudent)
studentroutes.get("/getStudent" ,getDelete , getStudent)
studentroutes.patch("/updateStudent" , Update ,updateStudent)
studentroutes.delete("/DeleteStudent" ,getDelete, DeleteStudent)
module.exports = studentroutes