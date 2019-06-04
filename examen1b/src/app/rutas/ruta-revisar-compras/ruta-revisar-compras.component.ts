import { Component, OnInit } from '@angular/core';
import { FacturaService } from 'src/app/servicios/factura/factura.service';

@Component({
  selector: 'app-ruta-revisar-compras',
  templateUrl: './ruta-revisar-compras.component.html',
  styleUrls: ['./ruta-revisar-compras.component.css']
})
export class RutaRevisarComprasComponent implements OnInit {

  facturas=[];

  constructor(private readonly _facturaService:FacturaService) { }

  ngOnInit() {
    this.facturas=this._facturaService.obtenerFacturas();
  }

  buscar(formulario){
    this.facturas = this._facturaService.buscarFactura(formulario.controls.busqueda.value)
  }

}
