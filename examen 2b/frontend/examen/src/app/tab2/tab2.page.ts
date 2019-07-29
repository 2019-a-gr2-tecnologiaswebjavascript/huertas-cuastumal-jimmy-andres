import { Component } from '@angular/core';
import { FacturaService } from '../services/factura/factura.service';
import { Factura } from '../dto/Factura';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  facturaABuscar;

  facturas:Factura[];
  constructor(private readonly _facturaService: FacturaService) {}

  ionViewWillEnter(){
    this.facturas= this._facturaService.facturas
    //this.nombreCajero = this._auth.currentUser.nombre
  }
}
