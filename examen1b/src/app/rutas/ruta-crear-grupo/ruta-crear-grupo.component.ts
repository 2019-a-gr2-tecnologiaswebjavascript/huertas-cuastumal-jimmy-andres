import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AgregarGrupoService } from 'src/app/servicios/agregar-grupo/agregar-grupo.service';
import { RutaGruposComponent } from '../ruta-grupos/ruta-grupos.component';

@Component({
  selector: 'app-ruta-crear-grupo',
  templateUrl: './ruta-crear-grupo.component.html',
  styleUrls: ['./ruta-crear-grupo.component.css']
})
export class RutaCrearGrupoComponent implements OnInit {

  nuevoId:string;
  nuevoGrupo;
  constructor(private readonly _activatedRoute:ActivatedRoute,
              private readonly _agregarGrupo: AgregarGrupoService,
              private readonly _agregar: RutaGruposComponent) { }

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
    this.nuevoGrupo={
      id: this.nuevoId,
      nombre: formulario.controls.nombreUsuario.value,
      fechaNacimiento: formulario.controls.fechaNac.value,
      numeroAutos: formulario.controls.numeroAutos.value,
      licenciaValida: formulario.controls.licenciaValida.value

    }
    this._agregar.agregarGrupo(this.nuevoGrupo)
  }
}
