import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrarNombreService } from '../registrar/registrar-nombre.service';

@Injectable({
  providedIn: 'root'
})
export class AutenticarService {

  estaRegistrado: boolean= false;

  constructor(private readonly _router:Router,
              private readonly _registrar:RegistrarNombreService) { }
  
  login(nombre:string){
    this._registrar.registrarNombre(nombre)
    this.estaRegistrado=true
  }

  logout(){
    this.estaRegistrado = false;
  }
}
