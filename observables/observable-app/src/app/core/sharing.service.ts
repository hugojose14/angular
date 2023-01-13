import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

export interface Persona{
    name:string;
}

@Injectable()
export class SharingService{

    private sharingObservablePrivate: BehaviorSubject<Persona> = new BehaviorSubject<Persona>({name:"Hugo"});

    get sharingObservable(){
        //Escuchamos
        return this.sharingObservablePrivate.asObservable();
    }

    set SharingObservable(data:Persona){
        //Emitimos un nuevo valor
        this.sharingObservablePrivate.next(data);
    }

}