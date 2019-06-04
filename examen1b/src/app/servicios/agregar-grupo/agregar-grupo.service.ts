import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RutaGruposComponent } from 'src/app/rutas/ruta-grupos/ruta-grupos.component';

@Injectable({
  providedIn: 'root'
})
export class AgregarGrupoService {

  constructor( private readonly _router:Router) { }
  nuevoGrupo;

  crearGrupo(grupo){
    console.log("llego al servicio");

  }
  
}
