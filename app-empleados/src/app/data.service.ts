import { HttpClient } from "@angular/common/http";
import {Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Empleado } from "./empleado.model";

@Injectable()
export class DataService{

    private httpClient:HttpClient;
    constructor(httpClient:HttpClient){
        this.httpClient = httpClient;
    }

    guardarEmpleados(empleados:Empleado[]){
        console.log("Llamando al servicio guardarEmpleados");
        this.httpClient.put('https://mis-clientes-64ec7-default-rtdb.firebaseio.com/datos.json',empleados).subscribe(
            {
                next: (v) => console.log("Se ha guardado la siguiente información => "  + v),
                error: (y) => console.log("Error con la siguiente información => " + y)
            }
        )
    }

    obtenerEmpleados():Observable<Object>{
        //Con el suscribe vigilamos cualquier movimiento que hace el observable
        return this.httpClient.get('https://mis-clientes-64ec7-default-rtdb.firebaseio.com/datos.json');
    }

    actualizarEmpleado(indice:number, empleado:Empleado){
        let url = `https://mis-clientes-64ec7-default-rtdb.firebaseio.com/datos/${indice}.json`;
        this.httpClient.put(url,empleado).subscribe(
            {
                next: (response) => console.log("Se ha actualizado la siguiente información => "  + response),
                error: (y) => console.log("Error con la siguiente información => " + y)
            }
        )

    }

    eliminarEmpleado(indice:number){
        let url = `https://mis-clientes-64ec7-default-rtdb.firebaseio.com/datos/${indice}.json`;
        this.httpClient.delete(url).subscribe(
            {
                next: (response) => console.log("Se ha eliminado correctamente el empleado => "  + response),
                error: (y) => console.log("Error con la siguiente información => " + y)
            }
        )

    }


}