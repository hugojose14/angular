import { Component } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Lista de empleados';

  empleados: Empleado[] = [
    new Empleado("Andres","Javier","Desarrollador de software",3200000),
    new Empleado("Juan","Ortiz","Gerente",10200000),
    new Empleado("Alberto","Rodriguez","QA",7200000),
    new Empleado("Hugo","Pèrez","Practicante desarrollador",2200000)
  ];

  cuadroNombre:string = "";
  cuadroApellido: string = "";
  cuadroCargo: string = "";
  cuadroSalario: number = 0;

  agregarEmpleado(){
    this.empleados.push(new Empleado(this.cuadroNombre,this.cuadroApellido,this.cuadroCargo, this.cuadroSalario));
  }

}
