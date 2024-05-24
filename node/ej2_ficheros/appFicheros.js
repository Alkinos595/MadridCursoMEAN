const fs = require("fs");
/*
let content1 = fs.readFileSync("./fichero1.txt").toString();
let content2 = fs.readFileSync("./fichero2.txt").toString();
let content3 = fs.readFileSync("./fichero3.txt").toString();
let content4 = content1 + '\n' + content2 + '\n' + content3;
fs.writeFileSync("./fichero4.txt", content4);
console.log(content4);
*/

fs.readFile("./fichero1.txt", function (error, contenido) {
	if (error) {
		console.log(error);
		return;
	}
	let contenido1 = contenido.toString();
	console.log(contenido1);

	fs.readFile("./fichero2.txt", function (error, contenido) {
		if (error) {
			console.log(error);
			return;
		}
		let contenido2 = contenido.toString();
		console.log(contenido2);

		fs.readFile("./fichero3.txt", function (error, contenido) {
			if (error) {
				console.log(error);
				return;
			}
			let contenido3 = contenido.toString();
			console.log(contenido3);

			let contenido4 = contenido1 + "\n" + contenido2 + "\n" + contenido3;

			fs.writeFile("./fichero4.txt", contenido4, function (error) {
				if (error) {
					console.log(error);
					return;
				}
				console.log("Fichero creado");
			});
		});
	});
});

console.log("Fin");