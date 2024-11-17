module.exports ={
    newTeacher:(req , res)=>{ 
       try{
       return res.send(console.log("New Teacher Added Successfully"))
       }catch(error){
         console.log(error.message)
       }
    }
}