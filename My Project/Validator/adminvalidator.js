const joi = require("joi") ;

const SignUpScheme = joi.object({
    name : joi.string().min(8).max(45).required(),
   username : joi.string().min(8).max(40).required()
})