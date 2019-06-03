import { Component, OnInit } from '@angular/core';
import { ProcductosService } from 'src/app/servicios/productos/procductos.service';
import { RegistrarNombreService } from 'src/app/servicios/registrar/registrar-nombre.service';
import { ItemCarritoCompras } from 'src/app/interfaces/item-carrito-compras';
import { CarritoService } from 'src/app/servicios/carrito/carrito.service';

@Component({
  selector: 'app-ruta-comprar',
  templateUrl: './ruta-comprar.component.html',
  styleUrls: ['./ruta-comprar.component.css']
})
export class RutaComprarComponent implements OnInit {

  productos=[];
  carrito=[];
  nombreCajero;
  constructor(private readonly _productoService:ProcductosService,
              private readonly _registrarService: RegistrarNombreService,
              private readonly _carritoService: CarritoService) { }

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

  }

  quitarDelCarrito(itemAQuitar){

    this._carritoService.quitarCarritoDeCompras(itemAQuitar);
  }

}
