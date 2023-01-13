import { NgModule } from '@angular/core';
import { LazyComponent } from './lazy.component';
import { CommonModule } from '@angular/common';


@NgModule({
    imports: [CommonModule],
    exports: [LazyComponent],
    declarations: [LazyComponent],
    providers: [],
})
export class LazyModule {
    constructor(){}
 }
