import { Component, OnInit } from '@angular/core';
import { CardService } from '../services/card.service';
import { Card } from '../models/card';

@Component({
	selector: 'app-list-cards',
	standalone: true,
	imports: [],
	templateUrl: './list-cards.component.html',
	styleUrl: './list-cards.component.css'
})
export class ListCardsComponent implements OnInit {

	listCards: any[] = [];
	constructor(private _ts: CardService) {

	}
	ngOnInit(): void {
		this._ts.showCards().subscribe((data) => {
			this.listCards = data;
		});
	}
}
