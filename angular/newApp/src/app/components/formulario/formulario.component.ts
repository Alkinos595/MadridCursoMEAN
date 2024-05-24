import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'app-formulario',
	standalone: true,
	imports: [FormsModule, CommonModule],
	templateUrl: './formulario.component.html',
	styleUrl: './formulario.component.css'
})
export class FormularioComponent {
	selectedCategory: string = 'general';
	selectedCountry: string = 'gb';
	categories: any[] = [
		{ value: 'general', nombre: 'General' },
		{ value: 'business', nombre: 'Negocios' },
		{ value: 'entertainment', nombre: 'Entretenimiento' },
		{ value: 'health', nombre: 'Salud' },
		{ value: 'science', nombre: 'Ciencia' },
		{ value: 'technology', nombre: 'Tecnología' },
		{ value: 'sports', nombre: 'Deportes' }
	];
	countries: any[] = [
		{ value: 'us', nombre: 'Estados Unidos' },
		{ value: 'gb', nombre: 'Reino Unido' },
		{ value: 'de', nombre: 'Alemania' },
		{ value: 'fr', nombre: 'Francia' },
		{ value: 'mx', nombre: 'México' },
		{ value: 'ar', nombre: 'Argentina' },
		{ value: 'br', nombre: 'Brasil' }
	];
	@Output() selectedParameters: any = new EventEmitter<any>();
	searchNews() {
		console.log("Categoria: " + this.selectedCategory + " Pais: " + this.selectedCountry);
		const PARAMENTERS = {
			category: this.selectedCategory,
			country: this.selectedCountry
		}
		this.selectedParameters.emit(PARAMENTERS);
	}
}
