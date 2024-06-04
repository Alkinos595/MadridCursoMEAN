
export class Disco {

	public titulo: string = '';
	public grupo: string  = '';
	public year: string   = '';

	public constructor(parametros: any) {
		if (parametros.titulo) {
			this.titulo = parametros.titulo
		}
		if (parametros.grupo) {
			this.grupo = parametros.grupo
		}
		if (parametros.year) {
			this.year = parametros.year
		}
	}
}

/*
export class Disco {
	constructor(
		public titulo: string = '',
		public grupo: string = '',
		public year: string = ''
	){}
}

export class Disco {
	public titulo: string = '';
	public grupo: string = '';
	public year: string = '';

	constructor(titulo: string, grupo: string, year: string) {
		this.titulo = titulo;
		this.grupo = grupo;
		this.year = year;
	}
}
*/