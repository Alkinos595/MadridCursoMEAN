import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-card',
	standalone: true,
	imports: [],
	templateUrl: './card.component.html',
	styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
	public image?: string = "https://i.ytimg.com/vi/n1wUYGvCOkA/maxresdefault.jpg";
	public titulo: string = "Dummy test";
	@Input() public datoEntrante: any;

	constructor(){}

	ngOnInit(): void {
		this.titulo = "Ejercicio AppGrid";
	}

}
