import { Injectable } from "@angular/core";
import { DataService } from "./data.service";
import { Empleado } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";

@Injectable()
export class EmpleadosService{

    private servicioVentanaEmergente: ServicioEmpleadosService;
    private dataService:DataService;

    empleados: Empleado[] = [];

    constructor(servicioVentanaEmergente: ServicioEmpleadosService,
        dataService:DataService){
        this.servicioVentanaEmergente = servicioVentanaEmergente;
        this.dataService = dataService;
    }

    setEmpleados(empleados:Empleado[]){
        this.empleados = empleados;
    }

    /*
    empleados: Empleado[] = [
        new Empleado("Andres","Javier","Desarrollador de software",3200000),
        new Empleado("Juan","Ortiz","Gerente",10200000),
        new Empleado("Alberto","Rodriguez","QA",7200000),
        new Empleado("Hugo","Pèrez","Practicante desarrollador",2200000)
      ];
      */

    agregarEmpleadoServicio(empleado:Empleado){
        this.servicioVentanaEmergente.muestraMensaje("Persona que se va a agregar: ".concat(empleado.nombre));
        this.empleados.push(empleado);
        this.dataService.guardarEmpleados(this.empleados);
    }

    obtenerEmpleados():Array<Empleado>{
        return this.empleados;
    }

    encontrarEmpleado(indice:number):Empleado{
        return this.empleados[indice];
    }

    actualizaEmpleado(empleado:Empleado, indice:number):void{
        //this.empleados[indice] = empleado;
        let empleadoModificado = this.empleados[indice];
        empleadoModificado.nombre = empleado.nombre;
        empleadoModificado.apellido = empleado.apellido;
        empleadoModificado.cargo = empleado.cargo;
        empleadoModificado.salario = empleado.salario;
        this.dataService.actualizarEmpleado(indice,this.empleados[indice]);
    }

    eliminarEmpleado(indice:number):void{
        //console.log("empleado a eliminar ", this.empleados[indice])
        this.empleados.splice(indice,1);
        this.dataService.eliminarEmpleado(indice);
        //console.log(this.empleados);
        //Reconstruir el array empleados

        if(this.empleados !== null){
            this.dataService.guardarEmpleados(this.empleados);
        }

    }

    cargarEmpleados(){
        return this.dataService.obtenerEmpleados();
    }

}