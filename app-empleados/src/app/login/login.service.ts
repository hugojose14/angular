import { Injectable, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import { CookieService } from "ngx-cookie-service";

@Injectable()
export class LoginService{

  token:string;
  
  constructor(private router:Router, private cookie: CookieService){
  }

  login(email:string, password:string){
    console.log('Email: ' + email)
    console.log('Password: ' + password)
    //Una promesa es aquella que no puede retornar el valor, porque aún no se conoce
     firebase.auth().signInWithEmailAndPassword(email,password).then(
      (response) =>{
        //currrent user es el usuario actual
        firebase.auth().currentUser?.getIdToken().then( token =>{
          this.token = token;
          //el método set admite una cookie
          this.cookie.set("token", this.token);
          this.router.navigate(['/']);
        })
      }
     ).catch((error) =>{
      console.log('Error: ' + error);
     });
  }

  getIdToken(){
    return this.cookie.get("token");
    //return this.token;
  }

  esUsuarioLogueado(){
    //console.log(this.token);
    //return this.token;;
    return this.cookie.get("token");
  }

  logout(){
    console.log("logout");
    firebase.auth().signOut().then(()=>{
      this.token="";
      this.cookie.set("token", this.token);
      this.router.navigate(['/'])
      //Refrescar la página
      window.location.reload();

    }).catch((error) =>{
      console.log("error", error);
    })
  }
}