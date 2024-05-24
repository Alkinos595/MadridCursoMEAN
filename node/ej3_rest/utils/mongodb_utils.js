const mongodb = require("mongodb");
require('dotenv').config({ path: '../.env' });

exports.esquema = null;

exports.conectar = function () {
	const url = `${process.env.MONGO_URL}`;
	const client = new mongodb.MongoClient(url);
	client.connect()
		.then((dbs) => {
			dbs.db("esquema-peliculas");
		})
		.catch((error) => {
			console.log("Error: " + error);
		})
}
/* 
exports.conectar = function () {
	const url = `${process.env.MONGO_URL}`;
	const client = new mongodb.MongoClient(url);
	return client.connect()
}
*/