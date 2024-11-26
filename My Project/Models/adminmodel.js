const {model} = require("./index") ;

module.exports={
    SignUp:async(body)=>{
     try{
const response = await model.adminTable.create({...body}) ;
return{
    response : response
}
     }catch(error){
   return {
    error : error
   }
     }
    }
}