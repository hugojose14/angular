import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";

@Injectable()
export class EmpleadosService{

    private servicioVentanaEmergente: ServicioEmpleadosService;

    constructor(servicioVentanaEmergente: ServicioEmpleadosService){
        this.servicioVentanaEmergente = servicioVentanaEmergente;
    }

    empleados: Empleado[] = [
        new Empleado("Andres","Javier","Desarrollador de software",3200000),
        new Empleado("Juan","Ortiz","Gerente",10200000),
        new Empleado("Alberto","Rodriguez","QA",7200000),
        new Empleado("Hugo","Pèrez","Practicante desarrollador",2200000)
      ];

    agregarEmpleadoServicio(empleado:Empleado){
        this.servicioVentanaEmergente.muestraMensaje("Persona que se va a agregar: ".concat(empleado.nombre));
        this.empleados.push(empleado);
    }

    obtenerEmpleados():Array<Empleado>{
        return this.empleados;
    }

    encontrarEmpleado(indice:number):Empleado{
        return this.empleados[indice];
    }

    actualizaEmpleado(empleado:Empleado, indice:number):void{
        this.empleados[indice] = empleado;
    }

    eliminarEmpleado(indice:number):void{
        console.log("empleado a eliminar ", this.empleados[indice])
        this.empleados.splice(indice,1);
        console.log(this.empleados);
    }
}