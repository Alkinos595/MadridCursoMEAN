import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Card } from '../models/card';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class CardService {
	private _URL: string = "http://localhost:3000/";
	constructor(private _http: HttpClient) { }

	createCard(card:Card):Observable<any>{
		return this._http.post<Card>(this._URL, card);
	}
	showCards():Observable<any>{
		return this._http.get(this._URL);
	}
}
