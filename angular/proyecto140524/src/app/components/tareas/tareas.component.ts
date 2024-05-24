import { Component } from '@angular/core';
import { Tarea } from '../../models/tarea';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-tareas',
	standalone: true,
	imports: [FormsModule, CommonModule],
	templateUrl: './tareas.component.html',
	styleUrl: './tareas.component.css'
})
export class TareasComponent {
	listaTarea: Tarea[] = [];
	nombreTarea: string = '';

	agregarTarea(){
		const tarea:Tarea = new Tarea(this.nombreTarea, false);
		this.listaTarea.push(tarea);
		this.nombreTarea = "";
	}
	eliminarTarea(i:number){
		this.listaTarea.splice(i,1);
	}
	modificarEstado(i:number){
		this.listaTarea[i].estado = !this.listaTarea[i].estado;
	}

}
