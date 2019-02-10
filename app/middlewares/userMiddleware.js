const joi = require('joi');

exports.validateInput = (type) => {
    switch(type) {
        case 'createUser' : 
        return (req, res, next) => {
            const schema = joi.object().keys({
                username: joi.string().required().error(new Error('Invalid username')),
                age: joi.number().integer().required().error(new Error('Invalid age')),
                email: joi.string().email({ minDomainAtoms: 2 }).required().error(new Error('Invalid email')),
                phoneNumber: joi.string().regex(/^(\+\d{1,2}\s)?\?\d{3}\?[\s.-]\d{3}[\s.-]\d{4}$/).required().error(new Error('Invalid PhoneNumber'))
            })
            
            joi.validate(req.body, schema)
            .then((value) => {
                console.log(value)
                next();
            })
            .catch(err => {
                res.status(401).json({
                    message: err.message || err
                });
            })
        }
    }
}

