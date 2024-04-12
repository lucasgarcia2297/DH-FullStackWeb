const {body} = require('express-validator');

//validaciones
const createUserValidation =[
    body('firstname')
        .notEmpty().withMessage('El campo nombre es requerido!')
        .isLength({min:2}).withMessage('El nombre debe tener más de dos caracteres!'),
    body('lastname').notEmpty().withMessage('El campo apellido es requerido!')
];

module.exports = {
    createUserValidation
}