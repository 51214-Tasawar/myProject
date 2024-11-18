const { response } = require("express");

const addStudent =(req , res )=>{
try{
    console.log(req.body)
return res.send({
    code : 200 ,
    status : "Added",
    response : req.body
});
}catch(error){
 return console.log(error.message)
}
}
const getStudent=(req ,res)=>{
try{
    return res.send({
        code : 200 ,
        status : "Get True",
        response :req.query
    });
}catch(error){
    return console.log(error.message)
}
}
const updateStudent =(req ,res)=>{
   try{
    return res.send({
        code : 200 ,
        status : "Updated",
        response : req.body
    })
   }catch(error){
   return  console.log(error.message)
   }
}
const DeleteStudent =(req ,res)=>{
try{
    console.log(req.query)
    return res.send({
        code : 200 ,
        status: "Deleted",
        response : req.query,
        
    } )
}catch(error){
   return console.log(error.message)
}
}

module.exports = {addStudent , getStudent , updateStudent , DeleteStudent}