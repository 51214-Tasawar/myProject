
const {model} = require("./index") ;

const CreateStudent= async(body)=>{
   try {
  const Student = await model.Students.create({...body})
return {
    response : Student
}
   }catch(error){
   return {
    error : error
   }
   }
}
const getStudents = async(studentname)=>{
  try{
  const getStudent = awaitmodel.Students.findAll({studentname})
  return {
    response : getStudent
  }
  }catch(error){
 return  {
   error :error
 }
  }
}

module.exports = {CreateStudent , getStudents} ;