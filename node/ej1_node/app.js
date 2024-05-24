const http = require("http");

http.createServer(function (req, res) {
	try {
		let metodo = req.method;
		let url = req.url;
		console.log("escuchando 3000: " + metodo + " " + url);
		console.log("----------------------------------------");

		if (metodo == "GET" && url == "/coches") {
			let html = crearHTML();
			res.setHeader("Content-Type", "text/html");
			res.end(html);
		}
		else {
			res.statusCode = 404;
			res.end();
		}
		/* let coche = {
			marca: "Ford",
			modelo: "Focus"
		}
		res.setHeader('Content-Type', 'application/json');
		res.end(JSON.stringify(coche)); */
	} catch (error) {
		console.log("Error: " + error);
		res.statusCode = 500;
		res.end();
	}
}).listen(3000);


function crearHTML() {

	let html = `
        <html>
            <head>
                <meta charset="UTF-8">
                <title>Nuestra primera web chispas</title>
            </head>
            <script type="application/javascript">
                alert("Contenido estático generado dinámicamente")
            </script>
            <body>
                <h2 align="center">
                    <font color="lightGreen">
                        Contenido HTML generado dinámicamente
                    </font>
                </h2>
                <table align="center" border="1">
                    <tr>
                        <th>Titulo</th>
                        <th>Director</th>
                    </tr>
                    ${generarTablaPeliculas()}
                </table>
            </body>
        </html>`

	return html
}

function generarTablaPeliculas() {
	let tabla = ""
	let peliculas = listarPeliculas()
	for (let pelicula of peliculas) {
		tabla +=
			`<tr>
                <td>${pelicula.titulo}</td>
                <td>${pelicula.director}</td>
            </tr>`
	}
	return tabla
}

function listarPeliculas() {
	//Simulamos una consulta a la bb.dd.
	return [
		{
			titulo: 'Indiana Jones',
			director: 'Steven Spielberg'
		},
		{
			titulo: 'Depredador',
			director: 'John McTiernan'
		},
		{
			titulo: 'Los Goonies',
			director: 'Richerd Donner'
		},
		{
			titulo: 'Tron',
			director: 'Steven Lisberger'
		},
		{
			titulo: 'Los violentos de Kelly',
			director: 'Brian G. Hutton'
		}
	]
}