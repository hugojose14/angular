import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-caracteristicas-empleado-c',
  templateUrl: './caracteristicas-empleado-c.component.html',
  styleUrls: ['./caracteristicas-empleado-c.component.css']
})
export class CaracteristicasEmpleadoCComponent {

  private servicioEmpleado: ServicioEmpleadosService;

  constructor(servicioEmpleado: ServicioEmpleadosService){
    this.servicioEmpleado = servicioEmpleado;
  }

  @Output() caracteristicasEmpleados = new EventEmitter<string>();
  
  agregaCaracteristicas(value: string) {
    this.servicioEmpleado.muestraMensaje(value);
    this.caracteristicasEmpleados.emit(value);
  }

}
