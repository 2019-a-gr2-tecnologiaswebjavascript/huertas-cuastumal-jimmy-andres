import { Injectable } from '@angular/core';
import { CarritoService } from '../carrito/carrito.service';
import { IfStmt } from '@angular/compiler';
import { Factura } from 'src/app/dto/Factura';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {
  facturas=[];

  constructor(
              private readonly _carritoService: CarritoService) { }

  generarFactura(factura:Factura){
    

    this._carritoService.carritoCompras=[];
    this.facturas.push(factura);
    console.log(factura)

  }

  obtenerFacturas(){
    return this.facturas
  }

  buscarFactura(busqueda){
    
    if(busqueda == ""){
      return this.facturas
    }else{    
      return this.facturas.filter(
      (factura)=>{
            return factura.nombre === busqueda || factura.vendedor === busqueda;

    })
    }
  }
}
