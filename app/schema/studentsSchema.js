const joi = require('joi')

const studentsSchema = joi.object().keys({
    nombre: joi.string().required().label('El campo nombre es requerido'),
    apellido: joi.string().required().label('El campo apellido es requerido'),
    edad: joi.number().required().label('El campo edad es requerido'),
    dni: joi.string().required().label('El campo dni es requerido'),
    curso: joi.string().required().label('El campo curso es requerido'),
    nota: joi.number().required().label('El campo nota es requerido'),
})

module.exports = studentsSchema