import { Component } from '@angular/core';

@Component({
	selector: 'app-box',
	standalone: true,
	imports: [],
	templateUrl: './box.component.html',
	styleUrl: './box.component.css'
})
export class BoxComponent {
	flag: boolean = false;
	cambiarColor(){
		this.flag = !this.flag
	}
	//document.body.style.backgroundColor = this.flag ? 'black' : 'white';
}
