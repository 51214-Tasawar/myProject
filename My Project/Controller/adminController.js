const {responseHandler} = require("../responseHandler")
const errorHandler = require("../errorHandler")

const {v4 : adminId} = require("uuid")
const {hash} = require("bcrypt")

const signUp = async(req , res)=>{
  try{
    req.body.password = await hash(req.body.password , 5)
    req.body.adminId = adminId()
return responseHandler(res , req.body)
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