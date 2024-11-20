const joi = require("joi")

const CreateScheme = joi.object({
    name : joi.string().min(5).max(25),
    username :joi.string().min(5).max(50).required(),
    password : joi.string().min(5).max(1000).required()
})
const UpdateScheme = joi.object({
    name : joi.string().min(5).max(25),
    username : joi.string().min(5).max(50).required()
})
const getDeleteScheme = joi.object({
    username : joi.string().min(5).max(50).required()
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
