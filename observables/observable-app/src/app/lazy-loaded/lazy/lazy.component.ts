import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona, SharingService } from 'src/app/core/sharing.service';

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.css']
})
export class LazyComponent {

  data$: Observable<Persona>;

  private sharingService:SharingService;

  constructor(sharingService:SharingService){
    this.sharingService = sharingService;
    this.data$ = sharingService.sharingObservable;
  }

}
