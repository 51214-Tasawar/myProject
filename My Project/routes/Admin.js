const adminRout = require("express").Router();

const {signUp , login , logout} = require("../Controller/adminController") ;

adminRout.post("/SignUp" , signUp);
adminRout.get("/login" , login);
adminRout.get("/logout" , logout);

module.exports = adminRout ;