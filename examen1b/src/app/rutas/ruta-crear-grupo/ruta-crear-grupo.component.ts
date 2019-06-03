import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AgregarGrupoService } from 'src/app/servicios/agregar-grupo/agregar-grupo.service';
import { RutaGruposComponent } from '../ruta-grupos/ruta-grupos.component';
import { GruposService } from 'src/app/servicios/grupos/grupos.service';

@Component({
  selector: 'app-ruta-crear-grupo',
  templateUrl: './ruta-crear-grupo.component.html',
  styleUrls: ['./ruta-crear-grupo.component.css']
})
export class RutaCrearGrupoComponent implements OnInit {

  nuevoId:string;
  nuevoGrupo;
  constructor(private readonly _activatedRoute:ActivatedRoute,
              private readonly _gruposService:GruposService) { }

  ngOnInit() {
    
    const parametrosCosulta$ = this._activatedRoute.queryParams;

    parametrosCosulta$.subscribe(
      (parametrosConsulta)=>{
        console.log('Parametros consulta',parametrosConsulta);
        this.nuevoId=parametrosConsulta.id;
      }
    )

  }

  crearGrupo(formulario){
    console.log(formulario);
    this._gruposService.agregarGrupo(formulario);
  }
}
