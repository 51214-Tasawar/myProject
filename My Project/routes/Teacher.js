const TeacherRout =require("express").Router();

const {
    newTeacher,
    getallTeachers,
    updateTeacher,
    deleteTeacher} = require("../Controller/Teachercontroller") ;

    TeacherRout.get("/getTeachers" , getallTeachers);
    TeacherRout.post("/addnew" , newTeacher);
    TeacherRout.patch("/update" , updateTeacher);
    TeacherRout.delete("/deleteTeacher" , deleteTeacher);

    module.exports = TeacherRout