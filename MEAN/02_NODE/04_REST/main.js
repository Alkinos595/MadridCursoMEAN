const http = require("http")
const express = require("express");
const mongodbUtil = require("./util/mongodbUtil")
const endpointPeliculas = require("./endpoints/endpointPeliculas")

mongodbUtil.conectar()
	.then(arrancarServidor)
	.catch(error => console.log(error))

function arrancarServidor() {

	let app = express();
	app.use(express.json({
		limit: '5mb'
	}));

	app.get("/peliculas", endpointPeliculas.listarPeliculas);
	app.post("/peliculas", endpointPeliculas.insertarPelicula);
	app.disable("x-powered-by");
	console.log("Arrancando el servidor...");
	http.createServer(app).listen(5000, function () {
		console.log("Esperando peticiones en el puerto 5000")
	})

	/* app.get("/trololo", (req, res) => {
		app.get("/fistro", (req, res) => {
			res.end("Fistro pecador salvaje de la pradera")
		})
		res.end("/fistro");
	}) */
}