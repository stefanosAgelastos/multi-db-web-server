const joi = require('joi');

//Register validation
const validateRegister = (data) => {

    const schema = joi.object({
        username: joi.string()
            .min(6)
            .required(),
        password: joi.string()
            .min(8)
            .required(),
        email: joi.string()
            .min(6)
            .required()
            .email()
    });
    return schema.validate(data);
}


//Login validation
const validateLogin = (data) => {

    const schema = joi.object({
        username: joi.string()
            .min(6)
            .uppercase()
            .required(),
        password: joi.string()
            .min(8)
            .required()
    }).unknown(true);
    return schema.validate(data);
}


//Exports both methods
module.exports.validateRegister = validateRegister;
module.exports.validateLogin = validateLogin; 