const errorHandler =(res , error)=>{
    try{
    return res.send({
        code : 400 ,
        error : error
    })
    }catch(error){
   return res.send({
    code : 400 ,
    error : {}
   }) }
}
module.exports = errorHandler