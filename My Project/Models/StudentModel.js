
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
 const UpdateStudent = await model.Students.update(
  {
    ...body
   } ,
  {
  where :{
    studentname : studentname
  }
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
const deleteStudents=({studentname})=>{
try{
const studentuser = model.Students.destroy({where :{studentname:studentname}});
return{
  response : studentuser
}
}catch(error){
 return {
    error : error.errors[0].message
}
}
}
module.exports = { CreateStudent , getStudents , updatestudent ,deleteStudents } ;