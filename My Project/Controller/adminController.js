const {responseHandler} = require("../responseHandler")
const errorHandler = require("../errorHandler")
const {SignUp} = require("../Models/adminmodel")
const {v4 : adminId} = require("uuid")
const {hash} = require("bcrypt")

const signUp = async(req , res)=>{
  try{
    req.body.password = await hash(req.body.password , 5)
    req.body.adminId = adminId()
    const response =  await SignUp(req.body)
    if(response.error){
      return errorHandler(res , response.error)
    }
return responseHandler(res , response.response)
  }catch(error){
   return errorHandler(res , error)
  }
}

module.exports ={
    login:(req,res)=>{
      try{
        return responseHandler(res , req.query)
      }catch(error){
        return errorHandler(res , error)
      }
    },
    logout:(req , res)=>{
   try{
    return responseHandler(res , req.query)
   }catch(error){
    return errorHandler(res , error)
    }
  },
    signUp
}