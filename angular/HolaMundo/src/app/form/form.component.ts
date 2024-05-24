import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, UpperCasePipe, CurrencyPipe, DatePipe],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  textPlaceHolder: string = "Texto de prueba";
  user: string = "Betof";

  cambiarPlaceholder(){
    this.textPlaceHolder = "Hola mundo";
  }
}
