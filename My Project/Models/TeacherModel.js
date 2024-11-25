// const { where } = require("sequelize");
// const {model} = require("./index") ;

// module.exports ={
//     AddTeacher:async(body)=>{
//         try{
//    const AddTeacher = await model.TeacherTable.create({...body})
//    return {
//     response : AddTeacher 
//    }
//     }catch(error){
//      return{
//         error : error.errors[0].message
//      }
//         }
//     } ,
//     UpdateTeachermodel:async({username , ...body})=>{
//      try{
//      const response = await model.TeacherTable.update(
//         {
//             ...body
//         },
//         {
//         where:
//             {
//                 username : username
//             },
//         }
//      )
//      return {
//         response : response
//      }
//      }catch(error){
//      return {
//         error : error.errors[0].message
//      }
//      }
//     },
//     getallTeacher :async()=>{
//         try{
//        const response = await model.TeacherTable.findAll()
//        return{
//         response : response 
//        }
//         }catch(error){
//             return {
//                 error : error.errors[0].message
//              }
//         }
//     },
//     DeleteTeacher :async({username})=>{
//         try{
//        const response = await model.TeacherTable.destroy({where:{username:username}})
//        return{
//         response : response 
//        }
//         }catch(error){
//             return {
//                 error : error.errors[0].message
//              }
//         }
//     }
// }