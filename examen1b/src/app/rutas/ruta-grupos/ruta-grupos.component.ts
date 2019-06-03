import { Component, OnInit } from '@angular/core';
import { AgregarGrupoService } from 'src/app/servicios/agregar-grupo/agregar-grupo.service';

@Component({
  selector: 'app-ruta-grupos',
  templateUrl: './ruta-grupos.component.html',
  styleUrls: ['./ruta-grupos.component.css']
})
export class RutaGruposComponent implements OnInit {
  
constructor(private readonly _agregarGrupo: AgregarGrupoService) { }

  grupos=[
    {
      id:"1",
      nombre: "Andres Huertas",
      fechaNacimiento: "29/01/1997",
      numeroAutos: "2",
      licenciaValida: "true"
    },
    {
      id:"2",
      nombre: "Adrian Eguez",
      fechaNacimiento: "17/01/1997",
      numeroAutos: "6",
      licenciaValida: "true"
    },
    {
      id:"3",
      nombre: "Pepito Perez",
      fechaNacimiento: "14/06/2001",
      numeroAutos: "2",
      licenciaValida: "true"
    },
    {
      id:"4",
      nombre: "Luchito Perez  ",
      fechaNacimiento: "14/06/2001",
      numeroAutos: "2",
      licenciaValida: "true"
    }
  ];

   
  nuevoId= this.grupos.length + 1;
  
  rutaNuevoGrupo="crearGrupo?id="+this.nuevoId

  agregarGrupo(grupo){
    this.grupos.push(grupo);
    this.nuevoId++;
  
  }
  eliminar(idGrupo){
    const index = this.grupos.indexOf(idGrupo)
    this.grupos.splice(index,1)
  }
  

  

  ngOnInit() {
  }

}
