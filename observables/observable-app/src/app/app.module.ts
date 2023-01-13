import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/services/core.module';
import { AppComponent } from './app.component';
import { LazyModule } from './lazy-loaded/lazy/lazy.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,CoreModule,LazyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
