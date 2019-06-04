import { Component, OnInit } from '@angular/core';
import { AgregarGrupoService } from 'src/app/servicios/agregar-grupo/agregar-grupo.service';
import { GruposService } from 'src/app/servicios/grupos/grupos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ruta-grupos',
  templateUrl: './ruta-grupos.component.html',
  styleUrls: ['./ruta-grupos.component.css']
})
export class RutaGruposComponent implements OnInit {
  
constructor(private readonly _grupoService: GruposService,
            private readonly _router:Router) { }

  grupos=[];
  
  busqueda;

  eliminarGrupo(idGrupo){
    this._grupoService.eliminarGrupo(idGrupo)
  }
  
  buscar(formulario ){
    
    let nombreABuscar = formulario.controls.busqueda.value;
    if (nombreABuscar !=""){
      console.log(nombreABuscar)
    this.grupos = this._grupoService.buscarGrupo(nombreABuscar);
    }else{
      this.grupos =this._grupoService.listarGrupos();
    }
    
  }

  ngOnInit() {
    this.grupos = this._grupoService.listarGrupos()

  }

}
