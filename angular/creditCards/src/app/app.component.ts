import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Client } from './models/client';
import { CreateCardComponent } from './create-card/create-card.component';
import { ListCardsComponent } from './list-cards/list-cards.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CreateCardComponent, ListCardsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'creditCards';
  showData() {
    let client = new Client('Ramón', 28);
    console.log(client.name);
    client._name = 'Filemon';
    console.log(client._name);
  }
}
