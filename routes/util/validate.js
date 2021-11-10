const joi = require('joi');

//Register validation
const validateRegister = (data) => {

    const schema = joi.object({
        first_name: joi.string()
            .min(3)
            .regex(/[a-zA-Z]+/)
            .required(),
        last_name: joi.string()
            .min(3)
            .required(),
        password: joi.string()
            .min(8)
            .regex(/[a-zA-Z]+/)
            .required(),
        email: joi.string()
            .min(6)
            .required()
            .email(),
        department_id: joi.number()
            .min(1)
            .required()
    });
    return schema.validate(data);
}


//Login validation
const validateLogin = (data) => {

    const schema = joi.object({
        email: joi.string()
            .min(6)
            .required()
            .email(),
        password: joi.string()
            .min(8)
            .required()
    }).unknown(true);
    return schema.validate(data);
}


//Exports both methods
module.exports.validateRegister = validateRegister;
module.exports.validateLogin = validateLogin;
