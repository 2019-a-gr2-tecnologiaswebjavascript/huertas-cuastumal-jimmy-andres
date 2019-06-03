import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProcductosService {

  constructor() { }

  productos=[
    {
      idChofer: "1",
      chasis: "jypo08-225",
      nombreMarca: "toyota",
      color: "azul",
      modelo: "Hilux",
      anio: "2019",
      valor: 1000
    },
    {
      idChofer: "2",
      chasis: "tpyf-10",
      nombreMarca: "hyunday",
      color: "negro",
      modelo: "Accent",
      anio: "2017",
      valor: 2000
    },{
      idChofer: "3",
      chasis: "jytasd98r",
      nombreMarca: "nissan",
      color: "azul",
      modelo: "xtrail",
      anio: "2008",
      valor: 3000
    }

  ]

  listarProductos(){
    return this.productos;
  }

  agregarProducto(formulario, idChofer){
    const nuevoProd={
      idChofer: idChofer,
      chasis: formulario.controls.chasis.value,
      nombreMarca: formulario.controls.nombreMarca.value,
      color: formulario.controls.color.value,
      modelo: formulario.controls.modelo.value,
      anio: formulario.controls.anio.value,
      valor: formulario.controls.valor.value

    }

    this.productos.push(nuevoProd);
  }

  eliminar(chasis){
    const index = this.productos.indexOf(chasis)
    this.productos.splice(index,1)
  }
}
