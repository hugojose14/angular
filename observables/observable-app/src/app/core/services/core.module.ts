import { NgModule } from '@angular/core';
import { LazyModule } from 'src/app/lazy-loaded/lazy/lazy.module';
import { SharingService } from '../sharing.service';

@NgModule({
    imports: [LazyModule],
    exports: [],
    declarations: [],
    providers: [SharingService],
})
export class CoreModule { }
