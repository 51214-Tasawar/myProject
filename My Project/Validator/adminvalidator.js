const joi = require("joi") ;

const SignUpScheme = joi.object({
    name : joi.string().min(8).max(45).required(),
   username : joi.string().min(8).max(40).required(),
   password : joi.string().min(8).max(50).required()
}) 
const login_outScheme = joi.object({
    username : joi.string().min(8).max(40).required(),
   password : joi.string().min(8).max(50).required()
})

module.exports ={
  SignUp :async(req , res , next)=>{
   try{
  await SignUpScheme.validateAsync(req.body)
     next()
   }catch(error){
  return res.send( {
    error : error.message
  })
   }
  } ,
  log_in_out:async(req , res , nex)=>{
    try{
        await login_outScheme.validateAsync(req.query)
           next()
         }catch(error){
        return res.send( {
          error : error.message
        })
         }
  }
}