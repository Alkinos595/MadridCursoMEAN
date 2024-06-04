import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Disco } from './entidades/app.entidades.disco';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, FormsModule],
	templateUrl: './app.component.html',
	styleUrl: './app.component.css'
})
export class AppComponent {

	public mensaje: string = "Hola que tal";
	public numero1: number = 10;
	public numero2: number = 20;

	public disco: Disco = new Disco({});
	public discos: Disco[] = [];
	public insertarDisco(): void {
		this.discos.push(this.disco);
		this.vaciarFormulario();
	}

	public vaciarFormulario(): void {
		this.disco = new Disco({});
		/* 
		this.disco.titulo = '';
		this.disco.grupo = '';
		this.disco.year = ''; 
		*/
	}

	public seleccionarDisco(disco: Disco): void {
		this.disco = disco;
	}

}

