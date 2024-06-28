import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
require('dotenv').config({ path: '../../../.env' });
const key = `${process.env.KEY_API}`;
@Injectable({
	providedIn: 'root'
})
export class NoticiasService {

	constructor(private _http: HttpClient) { }

	getNews(params: any): Observable<any> {
		const URL = `https://newsapi.org/v2/top-headlines?country=${params.country}&category=${params.category}&apiKey=${key}`;
		return this._http.get(URL);
	}
}
