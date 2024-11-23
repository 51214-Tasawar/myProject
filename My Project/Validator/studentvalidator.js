const joi = require("joi")

const CreateScheme = joi.object({
    studentname : joi.string().min(5).max(25),
    studentusername :joi.string().min(5).max(50).required(),
    password : joi.string().min(5).max(1000).required(),
    studentemail : joi.string().min(8).max(100).required()
})
const UpdateScheme = joi.object({
    studentname : joi.string().min(5).max(25),
    studentusername : joi.string().min(5).max(50).required()
})
const getDeleteScheme = joi.object({
    studentname : joi.string().min(5).max(50).required()
})
module.exports ={
    Create :async(req , res , next)=>{
   try {
   await CreateScheme.validateAsync(req.body)
    next()
   }catch(error){
   return res.send( {
    error : error.message
   }) } } ,
   Update:async(req , res , next)=>{
     try{
       await UpdateScheme.validateAsync(req.body)
        next()
     }catch(error){
     return res.send({
        error: error.message
     })}}, 
   getDelete :async( req ,res , next)=>{
    try{
       await getDeleteScheme.validateAsync(req.query)
       next()
    }catch(error){
    return res.send({
        error : error.message
    }) }}
}
