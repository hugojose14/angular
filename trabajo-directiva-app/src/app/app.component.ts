import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo: String = 'Registro de usuarios';
  mensaje: String = "";
  registrado:Boolean = false;
  nombre:String = "";
  apellido:String = "";

  cargo:string = "";
  

  entradas: Array<{titulo:String}>;

  constructor(){
    this.entradas = [
      {titulo:"Python cada dìa màs presente"},
      {titulo:"Java presente por màs de 20 años"},
      {titulo:"Scala cada dìa es màs funcional"},
      {titulo:"C# es similar a Java en sintaxis"}
    ]
  }


  registrarUsuario(){
    this.registrado = true;
    this.mensaje = 'El usuario se ha registrado correctamente'
  }

}
