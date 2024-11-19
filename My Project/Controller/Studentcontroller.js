const {hash} = require("bcrypt")

const {responseHandler} = require("../responseHandler")
const errorHandler = require("../errorHandler")


const addStudent = async(req , res )=>{
try{
 req.body.password = await hash (req.body.password , 10)
return responseHandler(res , req.body)
}catch(error){
return errorHandler(res , error)
}
}
const getStudent=(req ,res)=>{
try{
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