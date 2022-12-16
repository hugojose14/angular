import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mini calculadora';
  numero1:number =  0;
  numero2:number = 0;
  resultadoSuma:number = 0;
  resultadoResta:number = 0;

  sumar():void{
    this.resultadoSuma = this.numero1 + this.numero2;
  }

  restar():void{
    this.resultadoResta = this.numero1 - this.numero2;
  }


}
