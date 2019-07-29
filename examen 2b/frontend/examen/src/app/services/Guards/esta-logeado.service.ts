import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {AuthService} from "../Auth/auth.service";

@Injectable({
  providedIn: 'root'
})
export class EstaLogeadoService implements CanActivate{

  estaLoggeado=false

  constructor(
              private readonly _router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log('Entrando a verificar si tienes permisos')

    //const estaLogeado = this._authService.logeado
    //console.log('estaLogeado:',estaLogeado)
    if(this.estaLoggeado){
      console.log('Bienvenido')
      //this.estaLoggeado= true
    }else{
      console.log('Np estas Logeado')
      const url = ['/login']

      this._router.navigate(url)

    }
    return this.estaLoggeado;
  }
}
