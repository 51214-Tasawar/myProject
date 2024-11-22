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

module.exports = {CreateStudent} ;