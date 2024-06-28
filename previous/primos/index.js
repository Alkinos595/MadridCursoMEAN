function checkPrimo(num) {
	let i = 1;
	while (++i < num) {
		if (num % i === 0)
			return false;
	}
	return true;
}

function primos() {
	const entradaNum = document.getElementById('entradaNum');
	const result = document.getElementById('result');
	let num = parseInt(entradaNum.value);
	const numeros_primos = [];

	if (isNaN(num) || num < 2 || num > 10000)
		return alert("Numero invalido, verifica que la entrada sea: \n*Numerica\n*Mayor que 1\n*Menor a 10000");
	while (num-- && num >= 2) {
		if (checkPrimo(num))
			numeros_primos.push(num);
	}
	result.innerHTML = `<br> Total de resultados: ${numeros_primos.length} <br><br> Numeros primos entre 2 y ${entradaNum.value}:<br><br> ${numeros_primos.join(', ')}`;
}