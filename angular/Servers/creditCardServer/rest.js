const express = require('express');
const cardEntryModel = require('./entryScheme.js');
const mongoose = require('mongoose');

const router = express.Router();
const stringDBConnection = "";
mongoose.connect(stringDBConnection).then(() => {
	console.log("Coneccion a la base de datos con exito.");
}).catch((error) => {
	console.log("Error, la conexion exploto:" + error)
});
router.post('/', (req, res) => {
	const cardEntry = new cardEntryModel(req.body);
	cardEntry.save();
	res.json({ msj: "Registro añadido con exito", success: true });
})

router.get("/", async (req, res) => {
	let data = [];
	await cardEntryModel.find()
		.then((givenData) => {
			data = givenData;
			console.log(data);
			res.json(data);
		}).catch((error) => {
			console.log("Exploto por esto: " + error);
		})
})

module.exports = router;

