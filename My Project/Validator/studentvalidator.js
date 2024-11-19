const joi = require("joi")

const CreateScheme = joi.object({
    name : joi.string().min(5).max(25),
    username :joi.string().min(5).max(50).required(),
    password : joi.string().min(3).max(1000).required()
})
const UpdateScheme = joi.object({
    name : joi.string().min(5).max(25),
    username : joi.string().min(5).max(50).required()
})
const getDeleteScheme = joi.object({
    username : joi.string().min(5).max(50).required()
})
module.exports ={
    Create :(req , res , next)=>{
   try {
    CreateScheme.validateAsync(req.body)
    next()
   }catch(error){
   return res.send( {
    error : error
   }) } } ,
   Update:(req , res , next)=>{
     try{
        UpdateScheme.validateAsync(req.body)
        next()
     }catch(error){
     return res.send({
        error: error
     })}}, 
   getDelete :( req ,res , next)=>{
    try{
       getDeleteScheme.validateAsync(req.query)
       next()
    }catch(error){
    return res.send({
        error : error
    }) }}
}
