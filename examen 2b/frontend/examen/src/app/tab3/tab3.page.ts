import { Component } from '@angular/core';
import { HttpAutoService } from '../services/http/HttpAuto.service';
import { UsuarioHttpService } from '../services/http/HttpUsuario.service';
import { CarritoService } from '../services/carrito/carrito.service';
import { FacturaService } from '../services/factura/factura.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/Auth/auth.service';
import { ItemCarritoCompras } from '../dto/ItemCarritoCompras';
import { Factura } from '../dto/Factura';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  nombre:string;
  cedula:number;
  telefono:number;
  correo:string;
  direccion: string;
  autos=[];
  carrito=[];
  nombreCajero;
  valor;
  constructor(private readonly _httpAuto:HttpAutoService,
              private readonly _auth: AuthService,
              private readonly _carritoService: CarritoService,
              private readonly _facturaService: FacturaService,
              private readonly _router:Router) { }

  
  
  ionViewWillEnter(){
    this._httpAuto.buscarTodos().subscribe(
      (datos)=>{
        //console.log(datos)
        this.autos = datos
        console.log("aquii",this.autos);
      },
      (error)=>{
        console.log(error)
      }
    )
    //this.nombreCajero = this._auth.currentUser.nombre
  }

  agregarAlCarrito(autoCompra){

    const valor = autoCompra.valor;

    let itemCarrito : ItemCarritoCompras={
      modelo: autoCompra.modelo,
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


  async guardarFactura(){
    //console.log(formularioCabecera);
    //const cedula = this.cedula
    //const cedulaValidada = await validarCedula(cedula);

    const nuevaFactura:Factura={
      nombre: this.nombre,
      cedula: this.cedula,
      telefono: this.telefono,
      correo: this.correo,
      direccion: this.direccion,
      vendedor: this.nombreCajero,
      valor: this._carritoService.valorCarrito(),
      detalle: this._carritoService.carritoCompras
   }

    this._facturaService.generarFactura(nuevaFactura)
    const url = ['/tabs','tabs','tab2'];
    this._router.navigate(url);


  }
}

function validarCedula(cedula: string) {
  // Créditos: Victor Diaz De La Gasca.
  // Autor: Adrián Egüez
  // Url autor: https://gist.github.com/vickoman/7800717
  // Preguntamos si la cedula consta de 10 digitos
  if (cedula.length === 10) {

    // Obtenemos el digito de la region que sonlos dos primeros digitos
    const digitoRegion = cedula.substring(0, 2);

    // Pregunto si la region existe ecuador se divide en 24 regiones
    if (digitoRegion >= String(0) && digitoRegion <= String(24)) {

      // Extraigo el ultimo digito
      const ultimoDigito = Number(cedula.substring(9, 10));

      // Agrupo todos los pares y los sumo
      const pares = Number(cedula.substring(1, 2)) + Number(cedula.substring(3, 4)) + Number(cedula.substring(5, 6)) + Number(cedula.substring(7, 8));

      // Agrupo los impares, los multiplico por un factor de 2, si la resultante es > que 9 le restamos el 9 a la resultante
      let numeroUno: any = cedula.substring(0, 1);
      numeroUno = (numeroUno * 2);
      if (numeroUno > 9) {
        numeroUno = (numeroUno - 9);
      }

      let numeroTres: any = cedula.substring(2, 3);
      numeroTres = (numeroTres * 2);
      if (numeroTres > 9) {
        numeroTres = (numeroTres - 9);
      }

      let numeroCinco: any = cedula.substring(4, 5);
      numeroCinco = (numeroCinco * 2);
      if (numeroCinco > 9) {
        numeroCinco = (numeroCinco - 9);
      }

      let numeroSiete: any = cedula.substring(6, 7);
      numeroSiete = (numeroSiete * 2);
      if (numeroSiete > 9) {
        numeroSiete = (numeroSiete - 9);
      }

      let numeroNueve: any = cedula.substring(8, 9);
      numeroNueve = (numeroNueve * 2);
      if (numeroNueve > 9) {
        numeroNueve = (numeroNueve - 9);
      }

      const impares = numeroUno + numeroTres + numeroCinco + numeroSiete + numeroNueve;

      // Suma total
      const sumaTotal = (pares + impares);

      // extraemos el primero digito
      const primerDigitoSuma = String(sumaTotal).substring(0, 1);

      // Obtenemos la decena inmediata
      const decena = (Number(primerDigitoSuma) + 1) * 10;

      // Obtenemos la resta de la decena inmediata - la suma_total esto nos da el digito validador
      let digitoValidador = decena - sumaTotal;

      // Si el digito validador es = a 10 toma el valor de 0
      if (digitoValidador === 10) {
        digitoValidador = 0;
      }

      // Validamos que el digito validador sea igual al de la cedula
      if (digitoValidador === ultimoDigito) {
        return true;
      } else {
        return false;
      }

    } else {
      // imprimimos en consola si la region no pertenece
      return false;
    }
  } else {
    // Imprimimos en consola si la cedula tiene mas o menos de 10 digitos
    return false;
  }

}
