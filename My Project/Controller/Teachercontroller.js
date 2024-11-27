const {responseHandler} = require("../responseHandler")
const errorHandler = require("../errorHandler")
const {
  AddTeacher ,
  UpdateTeachermodel ,
  getallTeacher ,
  DeleteTeacher
} = require("../Models/TeacherModel")

const {hash} = require("bcrypt")
const {v4 : TeacherId } = require("uuid")

module.exports ={
    newTeacher:async(req , res)=>{ 
       try{
        req.body.TeacherId = TeacherId()
        req.body.password =  await hash (req.body.password , 5)
        const response = await AddTeacher(req.body)
        if(response.error){
           return errorHandler(res , response.error)
        }
      return responseHandler(res,response.response)
       }catch(error){
  return errorHandler(res , error)
       }
    } ,
    getTeacher :(req , res)=>{
      try{
      return responseHandler (res , req.query)
      }catch(error){
       return res.send(errorHandler(res , error))
      }
    } ,
    getallTeachers :async(req , res)=>{
      try{
        const response =  await getallTeacher()
        if( response.error){
          return errorHandler(res,response.error)
        }
        return responseHandler(res ,response.response )
      }catch(error){
        return errorHandler(res , error)
      }
    } ,
    updateTeacher:async(req ,res)=>{
     try{
      req.body.password =  await hash (req.body.password , 5)
      const response =  await UpdateTeachermodel(req.body)
      if( response.error){
        return errorHandler(res,response.error)
      }
      return responseHandler(res ,response.response )
     }catch(error){
      return errorHandler(res , error)
     }
    },
    deleteTeacher:async(req , res)=>{
      try{
        const response =  await DeleteTeacher(req.query)
        if( response.error){
          return errorHandler(res,response.error)
        }
        return responseHandler(res ,response.response )
      }catch(error){
        return errorHandler(res , error)
      }
    }
}