import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet],
	templateUrl: './app.component.html',
	styleUrl: './app.component.css'
})
export class AppComponent {
	title = 'DataBinding';
	public text: string = 'Mi nombre es Beto';

	constructor(){
		setInterval(() => {
			this.text = "Es Beto Beto mi nombre"
		}, 3000)
	}
}
