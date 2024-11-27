const {newTeacheradd , Teacherupdate , getdelete } = require("../Validator/Teachervalidator")

const TeacherRout =require("express").Router();
const {
    newTeacher,
    getallTeachers,
    updateTeacher,
    deleteTeacher,
    getTeacher } = require("../Controller/Teachercontroller") ;

    TeacherRout.get("/getTeachers" , getdelete ,getallTeachers);
    TeacherRout.get("/getTeacher" , getTeacher );
    TeacherRout.post("/addnew" , newTeacheradd, newTeacher);
    TeacherRout.patch("/update" , Teacherupdate ,updateTeacher);
    TeacherRout.delete("/deleteTeacher" ,  getdelete ,deleteTeacher);

    module.exports = TeacherRout