const mongodb = require("mongodb");
require('dotenv').config({ path: '../.env' });
const url = `${process.env.MONGO_URL}`;
const mongodbUtils = require('../utils/mongodb_utils.js');
const client = new mongodb.MongoClient(url);

let coleccion;
let dbs;

client.connect()
	.then((_dbs) => {
		dbs = _dbs
		let esquema = dbs.db("esquema-discos");
		console.log("Conexion realizada");
		coleccion = esquema.collection("discos");

		let disco = {
			tittle: "Album 1",
			group: "Banda 1",
			year: "2000",
			producedBy: "Random Studio"
		}
		return coleccion.insertOne(disco);
	})
	.then((result) => {
		console.log("Result: "+result);
		let cursor = coleccion.find();
		return cursor.toArray();
	})
	.then((discos) => {
		console.log(discos);
		return dbs.close();
	})
	.then( () => {
		console.log("Desconectado");
	})
	.catch((error) => {
		console.log("Error: " + error);
	})

