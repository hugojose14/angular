import { Component, Input } from '@angular/core';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-empleado-hijo',
  templateUrl: './empleado-hijo.component.html',
  styleUrls: ['./empleado-hijo.component.css']
})
export class EmpleadoHijoComponent {

  @Input() empleadoDeLista:Empleado;
  @Input() indice: number;

  caracteristicas:Array<String>=[];

  agregarCaracteristica(nuevaCaracteristica:string){
   this.caracteristicas.push(nuevaCaracteristica);
  }

}
