import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegistrarNombreService {
  nombre: string;

  constructor( private readonly _router:Router) { }

  registrarNombre(nombre:string){
      this.nombre= nombre;
      const url = ['/home','app'];
      this._router.navigate(url);
      return true;
   
  }
   
}
