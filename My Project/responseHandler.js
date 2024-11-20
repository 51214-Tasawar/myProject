module.exports = {
    responseHandler:(res, response)=>{
     try {
    return res.send({
        status : 200 ,
       response : response 
    })

     }catch(error){
     return res.send({ 
        status : 400 ,
      response : error.message
    })
     }
    }
}