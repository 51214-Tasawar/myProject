// const errorHandler = require("../errorHandler")

// const joi = require("joi") ;
// const newTeacher = joi.object({
//     name : joi.string().min(10).max(100).required(),
//     username : joi.string().min(10).max(100).required(),
//     password:joi.string().min(8).max(1000)
// })
// const updateTeacher = joi.object({
//     username : joi.string().min(10).max(100).required(),
//     password:joi.string().min(8).max(1000)
// })
// const getDeleteTeacher = joi.object({
//     username : joi.string().min(10).max(100).required()
// })
// module.exports ={
// newTeacheradd :async(req , res , next)=>{
//   try{ 
//    await newTeacher.validateAsync(req.body) ;
//    next()
//   }catch(error){
//     return res.send({
//         error : error.message
//     })
//   }
// },
// Teacherupdate:async(req ,res,next)=>{
//    try{
//    await updateTeacher.validateAsync(req.body)
//    next()
//    }catch(error){
//     return res.send({
//         error : error.message
//     })
//    }
// },
//  getdelete: async(req , res , next )=>{
//    try{
//     await getDeleteTeacher.validateAsync(req.query)
//     next()
// }catch(error){
//     return res.send({
//         error : error.message
//     })
// }
// }
// }