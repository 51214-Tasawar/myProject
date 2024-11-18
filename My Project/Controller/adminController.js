const { response } = require("express");

const signUp = (req , res)=>{
  try{
    return res.send({
        code : 200 ,
        status : " New User Sign Up ",
        re : req.body
    })
  }catch(error){
    return res.send({
        code : 400,
        status : "Something Wrong" ,
        error : error.message
       })
  }
}

module.exports ={
    login:(req,res)=>{
      try{
        return res.send(
            {
                code : 200 ,
                status : "Login New User",
                response : req.query ,
            }
        );
      }catch(error){
        return res.send({
            code : 400,
            status : "Something Wrong" ,
            error : error.message
           })
      }
    },
    logout:(req , res)=>{
   try{
  return res.send({
    code : 200 ,
    status : "User Logout " ,
    response : req.query
  });
   }catch(error){
    return res.send({
        code : 400,
        status : "Something Wrong" ,
        error : error.message
       })
   }
    },
    signUp
}