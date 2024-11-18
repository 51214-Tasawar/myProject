const signUp = (req , res)=>{
  try{
    return res.send(console.log("Click To Sign Up Admin"));
  }catch(error){
     return console.log(error.message)
  }
}

module.exports ={
    login:(req,res)=>{
      try{
        return res.send(console.log(" Login Successfully "));
      }catch(error){
        console.log(error.message);
      }
    },
    logout:(req , res)=>{
   try{
  return res.send(console.log("Log out the Current User of admin"));
   }catch(error){
    return console.log(error.message)
   }
    },
    signUp
}