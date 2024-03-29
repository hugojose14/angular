import { Component } from '@angular/core';
import { Persona, SharingService } from './core/sharing.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'observable-app';
  data$: Observable<Persona>;

  private sharingService:SharingService;

  constructor(sharingService:SharingService){
    this.sharingService = sharingService;
    this.data$ = sharingService.sharingObservable;
  }

}
