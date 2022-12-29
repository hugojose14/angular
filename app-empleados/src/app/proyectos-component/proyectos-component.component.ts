import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';


@Component({
  selector: 'app-proyectos-component',
  templateUrl: './proyectos-component.component.html',
  styleUrls: ['./proyectos-component.component.css']
})
export class ProyectosComponentComponent implements OnInit{

  //Inyectamos el servicio de Routin para enrutar
  private router:Router
  private empleadoService:EmpleadosService;
  empleados:Empleado[]= []; 

  constructor(router:Router, empleadoService:EmpleadosService){
    this.router = router;
    this.empleadoService = empleadoService;
  }

  ngOnInit(): void {
    this.empleados = this.empleadoService.empleados;
  }


  cuadroNombre:string = "";
  cuadroApellido: string = "";
  cuadroCargo: string = "";
  cuadroSalario: number = 0;

  agregarEmpleado(){
    let empleado = new Empleado(this.cuadroNombre,this.cuadroApellido,this.cuadroCargo, this.cuadroSalario);
    //this.empleadoService.agregarEmpleadoServicio(empleado);
    this.empleadoService.agregarEmpleadoServicio(empleado);
    this.volverHome();
    
  }
  
  volverHome(){
    //El mètodo navigate me va a permitir ir donde yo quiera
    this.router.navigate(['']);
  }

}
