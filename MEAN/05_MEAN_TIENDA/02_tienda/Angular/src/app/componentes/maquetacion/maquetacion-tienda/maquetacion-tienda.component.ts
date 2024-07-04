import { Component } from '@angular/core';
import { MenuComponent } from '../../tienda/menu/menu.component';
import { Router, RouterOutlet } from '@angular/router';
import { ServicioAutenticacion } from '../../../modelo/servicios/servicioAutenticacion';

@Component({
  selector: 'app-maquetacion-tienda',
  standalone: true,
  imports: [RouterOutlet, MenuComponent],
  templateUrl: './maquetacion-tienda.component.html'
})
export class MaquetacionTiendaComponent {

  constructor(
      private router:Router,
      private servicioAutenticacion:ServicioAutenticacion  
    ){

    //No es responsabilidad de MaquetaciónTiendacomponent el impedir
    //que el usuario navege utilizando la barra del navegador
    //Eso lo haremos con los 'guards'
    if(servicioAutenticacion.getJWT()==""){
      console.log("ANDE VAAAAAAS")
      router.navigateByUrl("/")
      return
    }

    //Es este componente el que deide que se verá nada más entrar a la tienda
    router.navigateByUrl("/tienda/perfil")

  }

}
