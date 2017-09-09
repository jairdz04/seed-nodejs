const joi = require("joi");

module.exports = {
	example: {
		body: {
			id_project: joi.any(), //recibe cualquier valor
			name: joi.string(), // texto
			description: joi.string().required(),//texto,campo obligatorio
			number: joi.number(), //numero
			number_range: joi.number().min(0).max(200), //numero minimo y maximo aceptado
			nulo: joi.string().allow(null) //valor nulo aceptado
		}
	}
}
