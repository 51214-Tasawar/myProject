const {responseHandler} = require("../responseHandler")
const errorHandler = require("../errorHandler")
const {CreateStudent , getStudents} = require("../Models/StudentModel")

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
const getStudent=(req ,res)=>{
try{
  const response = getStudents(res , req.query)
if(response.error){
    return errorHandler(res , error)
}
 return responseHandler(res , req.query)
}catch(error){
    return errorHandler(res , error)
}
}
const updateStudent =(req ,res)=>{
   try{
    return responseHandler(res , req.body)
   }catch(error){
    return errorHandler(res , error)
   }
}
const DeleteStudent =(req ,res)=>{
try{
    return responseHandler(res , req.query)
}catch(error){
    return errorHandler(res , error)
}
}
module.exports = {addStudent , getStudent , updateStudent , DeleteStudent}