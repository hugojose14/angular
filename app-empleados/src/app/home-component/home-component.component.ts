import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit{

  titulo = 'Lista de empleados';
  servicioEmpleadoService: ServicioEmpleadosService
  empleadoService: EmpleadosService;
  empleados:Empleado[]= [];

  constructor( servicioEmpleadoService: ServicioEmpleadosService,
    empleadoService:EmpleadosService){
    this.servicioEmpleadoService = servicioEmpleadoService;
    this.empleadoService = empleadoService;

    //Los datos que vienen de la inyecciòn los podemos utilizar de esta manera (desde el propio construtor)
    //this.empleados = this.empleadoService.obtenerEmpleados();
  }

  //Podemos llenar el arreglo de las dos maneras (constructor o con ngOnInit)
  ngOnInit(): void {
    this.empleados = this.empleadoService.obtenerEmpleados();
  }


  cuadroNombre:string = "";
  cuadroApellido: string = "";
  cuadroCargo: string = "";
  cuadroSalario: number = 0;

  agregarEmpleado(){
    let empleado = new Empleado(this.cuadroNombre,this.cuadroApellido,this.cuadroCargo, this.cuadroSalario);
    //this.empleadoService.agregarEmpleadoServicio(empleado);
    this.empleadoService.agregarEmpleadoServicio(empleado);    
  }

}
