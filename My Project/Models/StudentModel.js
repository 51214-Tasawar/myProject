
const { where } = require("sequelize");
const {model} = require("./index") ;
const { response } = require("express");

const CreateStudent= async(body)=>{
   try {
  const Student = await model.Students.create({...body})
return {
    response : Student
}
   }catch(error){
   return {
    error : error.errors[0].message
   }
   }
}
const getStudents = async(studentname)=>{
  try{
  const getStudentuser = await model.Students.findAll()
  return {
    response : getStudentuser
  }
  }catch(error){
 return  {
   error :error
 }
  }
}
const updatestudent =async({studentname , ...body})=>{
  try{
 const UpdateStudent = await model.Students.update({
  where :{
    studentname : studentname
  }
 },{
  ...body
 })
 return {
  response : UpdateStudent 
 }
}catch(error){
  return {
    error : error.errors[0].message
  }
  }
}
deleteStudent
module.exports = { CreateStudent , getStudents , updatestudent } ;