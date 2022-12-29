import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmpleadoHijoComponent } from './empleado-hijo/empleado-hijo.component';
import { CaracteristicasEmpleadoCComponent } from './caracteristicas-empleado-c/caracteristicas-empleado-c.component';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { EmpleadosService } from './empleados.service';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProyectosComponentComponent } from './proyectos-component/proyectos-component.component';
import { QuienesComponentComponent } from './quienes-component/quienes-component.component';
import { ContactoComponentComponent } from './contacto-component/contacto-component.component';
import { Routes,  RouterModule} from '@angular/router';
import { ActualizaComponentComponent } from './actualiza-component/actualiza-component.component';


//Aquì agrego las rutas que tendremos (AppRouting)
const appRoutes : Routes =  [
  //Se crea un objeto por cada ruta
  {path:'', component:HomeComponentComponent},
  {path:'proyectos', component: ProyectosComponentComponent},
  {path:'quienes-somos', component: QuienesComponentComponent},
  {path:'contacto', component: ContactoComponentComponent},
  //De esta forma prepararmos la ruta
  {path:'actualiza-empleado/:id', component: ActualizaComponentComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    EmpleadoHijoComponent,
    CaracteristicasEmpleadoCComponent,
    HomeComponentComponent,
    ProyectosComponentComponent,
    QuienesComponentComponent,
    ContactoComponentComponent,
    ActualizaComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //Necesario para el tema del routing (le paso las rutas)
    RouterModule.forRoot(appRoutes),
  ],
  providers: [ServicioEmpleadosService,EmpleadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
