const addStudent =(req , res )=>{
try{
return res.send(console.log("New Student Added Successfully"));
}catch(error){
 return console.log(error.message)
}
}
const getStudent=(req ,res)=>{
try{
    return res.send(console.log("Get the new  Student Successfully"));
}catch(error){
    return console.log(error.message)
}
}
const updateStudent =(req ,res)=>{
   try{
    return res.send(console.log("Update student Successfully"))
   }catch(error){
   return  console.log(error.message)
   }
}
const DeleteStudent =(req ,res)=>{
try{
    return res.send(console.log("New User Deleted Successfully"))
}catch(error){
   return console.log(error.message)
}
}

module.exports = {addStudent , getStudent , updateStudent , DeleteStudent}