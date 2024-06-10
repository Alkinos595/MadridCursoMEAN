import { Component } from '@angular/core';
import { ServicioAlmacenamiento } from '../../../util/servicioAlmacenamiento';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-confirmacion-registro',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './confirmacion-registro.component.html'
})
export class ConfirmacionRegistroComponent {

  public constructor(private servicioAlmacenamiento:ServicioAlmacenamiento){
    console.log(servicioAlmacenamiento.getItem("datosRegistro"))
  }

}
