module.exports ={
    newTeacher:(req , res)=>{ 
       try{
       return res.send(console.log("New Teacher Added Successfully"))
       }catch(error){
         console.log(error.message)
       }
    } ,
    getallTeachers :(req , res)=>{
      try{
      return res.send(console.log("Get All Teachers To see Total Staff"))
      }catch(error){
      return console.log(error.message)
      }
    } ,
    updateTeacher:(req ,res)=>{
     try{
      return res.send(console.log(" Update Teacher Info and Courses Successfully "))
     }catch(error){
      return console.log(error.message)
     }
    },
    deleteTeacher:(req , res)=>{
      try{
     return res.send(console.log("Teacher Record Deleted Successfully"))
      }catch(error){
     return console.log(error.message)
      }
    }
}