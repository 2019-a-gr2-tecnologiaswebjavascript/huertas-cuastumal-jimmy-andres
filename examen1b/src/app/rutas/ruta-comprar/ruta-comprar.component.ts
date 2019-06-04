import { Component, OnInit } from '@angular/core';
import { ProcductosService } from 'src/app/servicios/productos/procductos.service';
import { RegistrarNombreService } from 'src/app/servicios/registrar/registrar-nombre.service';
import { ItemCarritoCompras } from 'src/app/interfaces/item-carrito-compras';
import { CarritoService } from 'src/app/servicios/carrito/carrito.service';
import { FacturaService } from 'src/app/servicios/factura/factura.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ruta-comprar',
  templateUrl: './ruta-comprar.component.html',
  styleUrls: ['./ruta-comprar.component.css']
})
export class RutaComprarComponent implements OnInit {

  productos=[];
  carrito=[];
  nombreCajero;
  valor;
  constructor(private readonly _productoService:ProcductosService,
              private readonly _registrarService: RegistrarNombreService,
              private readonly _carritoService: CarritoService,
              private readonly _facturaService: FacturaService,
              private readonly _router:Router) { }

  ngOnInit() {
    this.productos = this._productoService.listarProductos();
    this.nombreCajero = this._registrarService.getNombre();
  }
  
  agregarAlCarrito(productoCompra){

    const valor = productoCompra.valor;

    let itemCarrito : ItemCarritoCompras={
      modelo: productoCompra.modelo,
      nombreCajero:this.nombreCajero,
      valor: valor
    }

   this.carrito =this._carritoService.agregarCarritoDeCompras(itemCarrito)
   this.valor=this._carritoService.valorCarrito();

  }

  quitarDelCarrito(itemAQuitar){

    this._carritoService.quitarCarritoDeCompras(itemAQuitar);
    this.valor=this._carritoService.valorCarrito();
  }

  guardarFactura(formularioCabecera){
    console.log(formularioCabecera);
    this._facturaService.generarFactura(formularioCabecera)
    const url = ['/home','app','revisarCompras'];
    this._router.navigate(url);


  }
  salir(){
    const url = ['/home','app'];
    this._router.navigate(url);
  }
  

}
