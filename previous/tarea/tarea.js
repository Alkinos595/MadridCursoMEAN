//&--------------------Solucion más Trabajada--------------------
/*
function islower(charToEvaluate) {
	return charToEvaluate >= 97 && charToEvaluate <= 122;
}
function isUpper(charToEvaluate) {
	return charToEvaluate >= 65 && charToEvaluate <= 90;
}
function encryptTextBy(text, by) {
	let i = -1;
	let encrypt = [];
	let chr;
	if(by <= 0 || by >= 27)
		return console.log("Error: Por favor ingrese un valor entre 1 y 26");
	while (++i < text.length) 
	{
		if(isUpper(text.charCodeAt(i)))
		{
			chr = text.charCodeAt(i) + by;
			if(chr >= 91)
				chr -= 26;
		}
		else if(islower(text.charCodeAt(i)))
		{
			chr = text.charCodeAt(i) + by;
			if(chr >= 123)
				chr -= 26;
		}
		else if(text.charCodeAt(i) >= 32 && text.charCodeAt(i) <= 126)
		{
			chr = text.charCodeAt(i) + by;
			if(chr >= 127)
				chr -= by;
		}
		else
		{
			chr = text.charCodeAt(i) + by;
		}
		encrypt.push(String.fromCharCode(chr));
	}
	return encrypt.join('');
}
function decryptTextBy(text, by) {
	let i = -1;
	let decrypt = [];
	let chr;
	if(by >= 27 || by <= 0)
		return console.log("Error: Por favor ingrese un valor entre 1 y 26");
	while (++i < text.length) 
	{
		if(isUpper(text.charCodeAt(i)))
		{
			chr = text.charCodeAt(i) - by;
			if(chr <= 64)
				chr += 26;
		}
		else if(islower(text.charCodeAt(i)))
		{
			chr = text.charCodeAt(i) - by;
			if(chr <= 96)
				chr += 26;
		}
		else if(text.charCodeAt(i) >= 32 && text.charCodeAt(i) <= 126)
		{
			chr = text.charCodeAt(i) - by;
			if(chr <= 31)
				chr += by;
		}
		else
		{
			chr = text.charCodeAt(i) - by;
		}
		decrypt.push(String.fromCharCode(chr));
	}
	return decrypt.join('');
}
*/
//&--------------------Solucion para vagos--------------------
/*
function encryptTextBy(text, by) {
	let i = 0;
	let encrypt = [];
	while (i < text.length) {
		let chr = text.charCodeAt(i) + by;
		encrypt.push(String.fromCharCode(chr));
		i++;
	}
	return encrypt.join('');
}
function decryptTextBy(text, by) {
	let i = -1;
	let decrypt = [];
	while (++i < text.length) {
		let chr = text.charCodeAt(i) - by;
		decrypt.push(String.fromCharCode(chr));
	}
	return decrypt.join('');
}
*/

//&--------------------Testing--------------------
let text = "Pablito con ñ clavo un clavito";
console.log(text);

text = encryptTextBy(text, 5);
console.log(text);

text = decryptTextBy(text, 5);
console.log(text);
