export class Client {
	_name: string;
	_edad: number;

	constructor(name: string, edad: number) {
		this._name = name;
		this._edad = edad;
	}
	public get name(){
		return this._name
	}	
}
