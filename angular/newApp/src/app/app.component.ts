import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListaNoticiasComponent } from './components/lista-noticias/lista-noticias.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { NoticiasService } from './services/noticias.service';
import { HttpParams } from '@angular/common/http';
import { SpinnerComponent } from './shared/spinner/spinner.component';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, NavbarComponent, ListaNoticiasComponent, FormularioComponent, SpinnerComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.css'
})
export class AppComponent {
	title = 'newApp';

	newsList: any[] = [];
	constructor(private _api: NoticiasService) { }
	searchNew(params: any) {
		console.log("Father: ");
		console.log(params);
		this._api.getNews(params).subscribe((result) => {this.newsList = result.articles});
	}
}
