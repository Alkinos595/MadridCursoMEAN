export class Card {
	owner: string;
	cardNumber: string;
	cvv: string;
	expirationDate: string;
	id?: string;
	creationDate?: string;

	constructor(owner: string, cardNumber: string, cvv: string, expirationDate: string, id?: string, creationDate?: string) {
		this.owner = owner;
		this.cardNumber = cardNumber;
		this.cvv = cvv;
		this.expirationDate = expirationDate;
		this.id = id;
		this.creationDate = creationDate;
	}
}
