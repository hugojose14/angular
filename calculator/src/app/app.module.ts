import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

//Decorador
@NgModule({
  declarations: [
    //con los componentes, u otros artefactos que este module construye.
    AppComponent
  ],
  imports: [
    //Con los imports que este módulo necesita
    BrowserModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
