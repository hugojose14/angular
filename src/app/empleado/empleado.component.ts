import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  // inline -> para un html muy sencillo (inline es no pegarle a un archivo externo)
  //template:"<p>here would go an employee</p>",
  styleUrls: ['./empleado.component.css']
  // inline -> para un css muy sencillo
  //styles:["p{background-color: red;}"]
})
export class EmpleadoComponent {

  nombre = "Juan";
  apellido = "Diaz";
  private edad = 16;
  enterprise= "Google";
  cantidadCaracteresOcupacion?:Number;

  //Propiedades del binding 
  habilitarCuadro: Boolean = false;

  esUsuarioRegistrado: Boolean = false;

  textoDeRegistro: String= "No hay nadie registrado";

  esCampoContrasenaVacio: String = "";

  esCampoDisabled= false;



  public getEdadUsuario():number{
    return this.edad;
  }

  public calcularCantidadCaracteresOcupacion(valorOcupacion:String){
    this.cantidadCaracteresOcupacion = valorOcupacion.length;
  }

  //Cambiar el valor esRegistroUsuario 
  public getRegistroUsuario(): void{
     this.esUsuarioRegistrado = false;
  }

  //Le pasamos por parametro el evento (biding) y 
  //Allì accedemos a las propiedades, en este caso event.target 
  //para acceder a la variable value debemos hacer un casting 
  //transformar event.target a un evento html y en base a eso nos ponga x cosa
  public setUsuarioRegistrado(event: Event){
    //console.log(event.target);
    //alert(event.target);
    
    //Transformar el objeto del evento a un html (Cast)
    if((<HTMLInputElement>event.target).value === "si"){
      this.textoDeRegistro = "El usuario se acaba de registrar";
    }
    else{
      this.textoDeRegistro = "No hay nadie registrado";
    }

    //this.textoDeRegistro = "El usuario se acaba de registrar";
    //alert("El usuario se acaba de registrar")
  }

  public validarCamposContrasena(nombreUsuario: HTMLInputElement, contrasena: HTMLInputElement){
    console.log("Imprimiendo username: " + nombreUsuario.value);
    console.log("Imprimiendo password: " + contrasena.value);

    if((!nombreUsuario.value || nombreUsuario.value.length === 0) || (!contrasena || contrasena.value.length === 0)){
      this.esCampoContrasenaVacio = "Nombre de usuario o contraseña invalidos";
    }
    else{
      this.esCampoContrasenaVacio = "";
    }

  }

  //Funcion para el two way binding
  //public cambiaEmpresa(event:Event){
    //this.enterprise = (<HTMLInputElement>event.target).value;
  //}

 

}
