console.log("import endpoint peliculas");
const negocioPeliculas = require("../negocio/negocioPeliculas.js");

exports.listarPeliculas = function (req, res) {
	let criterio = {};
	negocioPeliculas.listarPeliculas(criterio)
		.then((peliculas) => {
			res.setHeader();
			res.end(JSON.stringify(peliculas));
		})
		.catch(() => {
			res.statusCode = 500;
			res.end();
		})
}

exports.insertarPeliculas = function (req, res) {


	
}