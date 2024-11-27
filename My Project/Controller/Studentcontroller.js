const {responseHandler} = require("../responseHandler")
const errorHandler = require("../errorHandler")
const {CreateStudent , getallStudent , UpdateStudent , deleteStudents , get_one_student} = require("../Models/StudentModel")

const {hash} = require("bcrypt")
const {v4 : studentId} = require("uuid")


const addStudent = async(req , res )=>{
try{
    req.body.studentId = studentId()
    req.body.password = await hash (req.body.password , 10)

    const response = await CreateStudent(req.body)
    
    if(response.error){
        return errorHandler(res , response.error)
    }
    return responseHandler(res, response.response)
}catch(error){
return errorHandler(res , error)
}
}
const getStudent=async(req ,res)=>{
try{
  const response = await getallStudent(req.query)
if(response.error){
    return errorHandler(res , response.error)
}
 return responseHandler(res , response.response)
}catch(error){
    return errorHandler(res , error)
}
}
const get_oneStudent =async(req , res)=>{
     try{
        const response =  await get_one_student(req.query)
        if(response.error){
            return errorHandler(res , response.error)
        }
        return responseHandler(res , response.response)
       
     }catch(error){
     return errorHandler(res , error)
     }
}
const updateStudent = async(req ,res)=>{
   try{
    req.body.password = await hash (req.body.password , 10)
    const response = await UpdateStudent(req.body)
    if(response.error){
        return errorHandler(res , response.error)
    }
    return responseHandler(res , response.response)
   }catch(error){
    return errorHandler(res , error)
   }
}
const DeleteStudent =(req ,res)=>{
try{
    const response = deleteStudents(req.query);
    if(response.error){
        return errorHandler(res , response.error)
    }
    return responseHandler(res , response.response)
}catch(error){
    return errorHandler(res , error)
}
}
module.exports = {addStudent , getStudent, get_oneStudent , updateStudent , DeleteStudent}