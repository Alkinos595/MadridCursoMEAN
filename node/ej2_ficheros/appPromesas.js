const fs = require("fs/promises");

/* 
&----------Solo para comparar----------
fs.readFile("./fichero1.txt", function (error, contenido) {
	if (error) {
		console.log(error);
		return;
	}
	let contenido1 = contenido.toString();
	console.log(contenido1);
});
 */

let content1;
let content2;

fs.readFile('./fichero1.txt')
	//*Si se cumple lo prometido viene el then(entonces) => realiza tal tarea
	.then((content) => {
		content1 = content.toString();
		console.log("Todo bien manolo: " + content.toString());
		return fs.readFile('./fichero2.txt');
	})
	.then((content) => {
		content2 = content.toString();
		console.log("Todo bien manolo: " + content.toString());
		return fs.readFile('./fichero3.txt');
	})
	.then((content) => {
		let content3 = content.toString();
		console.log("Todo bien manolo: " + content.toString());
		return fs.writeFile("./fichero4.txt", content1 + '\n' + content2 + '\n' + content3);
	})
	.then(() => {
		console.log("Fichero creado");
	})
	//*Si no se cumple lo prometido viene el catch(atrapa) => realiza tal tarea
	.catch((error) => {
		console.log("Todo mal manolo: " + error);
	});

console.log("FIN, aunque me imprimo primero");