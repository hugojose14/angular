import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';
import {ActivatedRoute} from '@angular/router';



@Component({
  selector: 'app-actualiza-component',
  templateUrl: './actualiza-component.component.html',
  styleUrls: ['./actualiza-component.component.css']
})
export class ActualizaComponentComponent implements OnInit{

  //Inyectamos el servicio de Routin para enrutar
  private router:Router
  private empleadoService:EmpleadosService;
  private activatedRoute: ActivatedRoute;
  empleados:Empleado[]= []; 

  constructor(router:Router, empleadoService:EmpleadosService, activatedRoute:ActivatedRoute){
    this.router = router;
    this.empleadoService = empleadoService;
    this.activatedRoute = activatedRoute;
  }

  ngOnInit(): void {
    this.empleados = this.empleadoService.empleados;
    //almacenar el indice que viene de la url
    //el indice del empleado
    //Rescatamos el indice del empleado que viene en la url
    this.indice = this.activatedRoute.snapshot.params['id'];

    //Construimos un objeto de tipo empleado y rescatamos el empleado
    let empleado:Empleado = this.empleadoService.encontrarEmpleado(this.indice);

    this.cuadroNombre = empleado.nombre;
    this.cuadroSalario = empleado.salario;
    this.cuadroApellido= empleado.apellido;
    this.cuadroCargo = empleado.cargo;

  }


  cuadroNombre:string = "";
  cuadroApellido: string = "";
  cuadroCargo: string = "";
  cuadroSalario: number = 0;
  indice:number;


  actualizaEmpleado(){
    let empleado = new Empleado(this.cuadroNombre,this.cuadroApellido,this.cuadroCargo, this.cuadroSalario);
    //this.empleadoService.agregarEmpleadoServicio(empleado);
    this.empleadoService.actualizaEmpleado(empleado,this.indice);
    this.volverHome();
    
  }

  eliminarEmpleado(){
    this.empleadoService.eliminarEmpleado(this.indice);
    this.volverHome();
  }
  
  volverHome(){
    //El mètodo navigate me va a permitir ir donde yo quiera
    this.router.navigate(['']);
  }

}
