const adminRout = require("express").Router();

const {signUp , login , logout} = require("../Controller/adminController") ;
const {SignUp , log_in_out} = require("../Validator/adminvalidator")

adminRout.post("/SignUp" ,SignUp, signUp);
adminRout.get("/login" ,log_in_out, login);
adminRout.get("/logout" ,log_in_out, logout);

module.exports = adminRout ;