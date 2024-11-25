const { response } = require("express")
const {model} = require("../Models/index")
const { DeleteStudent } = require("../Controller/Studentcontroller")
const { where } = require("sequelize")


module.exports ={
  CreateStudent:async(body)=>{
     try{
    const createStudent = await model.Students.create({...body})
    return {
      response : createStudent 
    }
     }catch(error){
    return{
      error : error
    }
     }
  },
  getallStudent:async()=>{
    try{
 const getall  =await model.Students.findAll()
 return {
  response : getall
 }
    }catch(error){
  return {
    error : error
  }
    }
  } ,
  UpdateStudent:async({studentname , ...body})=>{
    try{
   const Update = await model.Students.update(
    {
      ...body
    },{
   where :{
    studentname : studentname
   }
   })
   return{
    response : Update
   }
    }catch(error){
  return {
    error : error
  }
    }
  } ,
  deleteStudents:async({studentname})=>{
    try{
     const deleteStudent = await model.Students.destroy({where:{studentname :studentname}})
     return {
    response : deleteStudent
     }
    }catch(error){
    return {
      error : error 
    }
    }
  }
}