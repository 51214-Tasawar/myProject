const { response } = require("express")


module.exports ={
    newTeacher:(req , res)=>{ 
       try{
       return res.send({
        code : 200 ,
        status : "New User Added" ,
        response : req.body
       })
       }catch(error){
         console.log(error.message)
       }
    } ,
    getallTeachers :(req , res)=>{
      try{
      return res.send({
        code : 200 ,
        status : " Get New Teacher ", 
        response : req.query
      })
      }catch(error){
      return console.log(error.message)
      }
    } ,
    updateTeacher:(req ,res)=>{
     try{
      return res.send({
        code : 200 ,
        status : " Updated User ", 
        response : req.body
      })
     }catch(error){
      return console.log(error.message)
     }
    },
    deleteTeacher:(req , res)=>{
      try{
     return res.send({
      code : 200 ,
      status : "User Deleted ", 
      response : req.query
    })
      }catch(error){
     return console.log(error.message)
      }
    }
}