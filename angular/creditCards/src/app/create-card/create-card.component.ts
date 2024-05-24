import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CardService } from '../services/card.service';
import { Card } from '../models/card';

@Component({
	selector: 'app-create-card',
	standalone: true,
	imports: [ReactiveFormsModule],
	templateUrl: './create-card.component.html',
	styleUrl: './create-card.component.css'
})
export class CreateCardComponent {
	form!: FormGroup;
	constructor(private _fb: FormBuilder, private _ts: CardService) {
		this.form = this._fb.group({
			owner: ["", [Validators.required, Validators.email]],
			cardNumber: ["", [Validators.required, Validators.minLength(16), Validators.maxLength(16)]],
			cvv: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
			expirationDate: ["", [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)]]
		});
	}
	addCard() {
		console.log(this.form);
		const formValues = this.form.value;
		const card: Card = new Card(formValues.owner, formValues.cardNumber, formValues.cvv, formValues.expirationDate);
		this._ts.createCard(card).subscribe((response) => {
			alert(response.msj);
		});
		/* this.validateLength(3) */
		/* private validateLength(limit: number){
			return[Validators.minLength(limit), Validators.maxLength(limit)]
		} */
	}
}
