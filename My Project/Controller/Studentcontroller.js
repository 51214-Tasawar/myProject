const {responseHandler} = require("../responseHandler")
const errorHandler = require("../errorHandler")
const {CreateStudent , getStudents , updatestudent} = require("../Models/StudentModel")

const {hash} = require("bcrypt")
const {v4 : studentId} = require("uuid")
const { update } = require("../Models/Tables/Student")

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
  const response = await getStudents()
if(response.error){
    return errorHandler(res , error)
}
 return responseHandler(res , response.response)
}catch(error){
    return errorHandler(res , error)
}
}
const updateStudent = async(req ,res)=>{
   try{
    const response = await updatestudent(req.body)
    if(response.error){
        return errorHandler(res , error)
    }
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