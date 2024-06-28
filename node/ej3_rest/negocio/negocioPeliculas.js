const mongodbUtils = require("../utils/mongodb_utils.js");

exports.listarPeliculas = function () {

	let peliculas


	let coleccion = mongodbUtils.esquema.coleccion("peliculas");
	coleccion.find().toArray()
		.then((_peliculas) => {
			peliculas = _peliculas
			console.log(peliculas);
		})

	return peliculas;


}