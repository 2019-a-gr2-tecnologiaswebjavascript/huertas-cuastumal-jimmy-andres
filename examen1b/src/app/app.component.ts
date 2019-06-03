import { Component } from '@angular/core';

import { AutenticarService } from './servicios/autenticar/autenticar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'examen1b';
  nombre: string;

  constructor(private readonly _autenticar:AutenticarService) { }
  registrarNombre(formulario){
    console.log(formulario)
    const nombre = formulario.controls.nombreUsuario.value
    this._autenticar.login(nombre);

  }
  
}
