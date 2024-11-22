module.exports = {
    responseHandler:(res, data)=>{
     try {
    return res.send({
        status : 200 ,
       data : data 
    })

     }catch(error){
     return res.send({ 
        status : 400 ,
      response : error.message
    })
     }
    }
}