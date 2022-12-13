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

}
