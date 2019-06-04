import { Component, OnInit } from '@angular/core';
import { RutaGruposProductosComponent } from '../ruta-grupos-productos/ruta-grupos-productos.component';
import { ProcductosService } from 'src/app/servicios/productos/procductos.service';

@Component({
  selector: 'app-ruta-crear-producto',
  templateUrl: './ruta-crear-producto.component.html',
  styleUrls: ['./ruta-crear-producto.component.css']
})
export class RutaCrearProductoComponent implements OnInit {

  constructor(private readonly _productosService:ProcductosService,
              private readonly _grupo:RutaGruposProductosComponent) { }

  ngOnInit() {
  }

  crearProducto(formulario){
    this._productosService.agregarProducto(formulario, this._grupo.idGrupo)
  }

}
