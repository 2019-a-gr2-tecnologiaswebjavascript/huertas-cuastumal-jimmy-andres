import { Injectable } from '@angular/core';
import { RegistrarNombreService } from '../registrar/registrar-nombre.service';
import { CarritoService } from '../carrito/carrito.service';
import { factura } from 'src/app/interfaces/factura';
import { IfStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {
  facturas=[];

  constructor(private readonly _registrarService: RegistrarNombreService,
              private readonly _carritoService: CarritoService) { }

  generarFactura(formulario){
    
     const nuevaFactura:factura={
       nombre: formulario.controls.nombreUsuarioCompra.value,
       cedula: formulario.controls.cedula.value,
       telefono: formulario.controls.telefono.value,
       correo: formulario.controls.mail.value,
       direccion: formulario.controls.direccion.value,
       vendedor: this._registrarService.getNombre(),
       valor: this._carritoService.valorCarrito(),
       detalle: this._carritoService.carritoCompras
    }

    this._carritoService.carritoCompras=[];
    this.facturas.push(nuevaFactura);
    //console.log(nuevaFactura)

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
