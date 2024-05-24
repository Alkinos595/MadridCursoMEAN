const mongodbUtils = require('../utils/mongodb_utils.js');
const make = require("./endpoints/endpointPeliculas.js");
const http = require("http");
const port = 3000;

mongodbUtils.conectar();


http.createServer(procesarPeticion).listen(port, () => {

	console.log(`Esperando peticiones en el puerto ${port}`);

});

function procesarPeticion(request, response) {

	console.log("====================================");
	let metodo = request.metodo;
	let ruta = request.ruta;
	console.log(`Peticion recibida: ${metodo} ${ruta}`);

	if (metodo == "GET" && ruta == "/peliculas") {
		make.listarPeliculas(req, res);
	}
	else if ((metodo == "POST" && ruta == "/peliculas")) {
		make.insertarPeliculas(req, res);
	} else {
		response.statusCode = 404;
		response.end();
	}
}