import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AutenticarService } from '../autenticar/autenticar.service';

@Injectable({
  providedIn: 'root'
})
export class EstaRegistradoService {

  constructor(private readonly _router:Router,
              private readonly _autenticar:AutenticarService) { }

  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean{
      const estaLogeado = this._autenticar.estaRegistrado
      if(estaLogeado){
        console.log('Bienvenido');
        return true;
      }else {
        const url =['/#/'];
        this._router.navigate(url);
        alert('No tiene permisos inicie sesion');
        return false;
      }
  }
}