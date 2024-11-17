const addStudent =(req , res )=>{
try{
return res.sned(console.log("New Student Added Successfully"));
}catch(error){
 return console.log(error.message)
}
}
const getStudent=(req ,res)=>{
try{
  
}catch(error){
    return console.log(error.message)
}
}
const updateStudent =(req ,res)=>{
   try{
    return res.sned(console.log("Update student Successfully"))
   }catch(error){
   return  console.log(error.message)
   }
}
const DeleteStudent =(req ,res)=>{
try{
    return res.sned(console.log("New User Deleted Successfully"))
}catch(error){
   return console.log(error.message)
}
}

module.exports = {addStudent , getStudent , updateStudent , DeleteStudent}