import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GruposService {

  constructor() { }

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

  listarGrupos(){
    return this.grupos;
  }

  agregarGrupo(formulario){
    const nuevoId= this.grupos.length +1;
    const nuevoGrupo={
      id: nuevoId.toString(),
      nombre: formulario.controls.nombreUsuario.value,
      fechaNacimiento: formulario.controls.fechaNac.value,
      numeroAutos: formulario.controls.numeroAutos.value,
      licenciaValida: formulario.controls.licenciaValida.value
    }

    this.grupos.push(nuevoGrupo);
  }

  eliminarGrupo(idGrupo){
    const index = this.grupos.indexOf(idGrupo)
    this.grupos.splice(index,1)
  }

  buscarGrupo(nombre){
    
    return this.grupos.filter(
      (grupo)=>{
            return grupo.nombre === nombre;

    })
  }
}
