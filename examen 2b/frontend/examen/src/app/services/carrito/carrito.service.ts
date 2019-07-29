import { Injectable } from '@angular/core';
import { identifierModuleUrl } from '@angular/compiler';
import { ItemCarritoCompras } from 'src/app/dto/ItemCarritoCompras';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor() { }

  carritoCompras:ItemCarritoCompras[] = [];

  agregarCarritoDeCompras(
      itemCarrito:ItemCarritoCompras
      ):ItemCarritoCompras[]{
      const modelo = itemCarrito.modelo;
      const cajero = itemCarrito.nombreCajero;
      let indiceItem = -1;
      const existeElItem = this.carritoCompras
          .some(
              (item:ItemCarritoCompras, indice)=>{
                  if(item.modelo == modelo){
                      indiceItem = indice;
                      return true;
                  }else{
                      return false;
                  }
              }
          )

      if(existeElItem){
          this.anadirAlContador(indiceItem);

      }else{
          this.anadirAlCarrito(itemCarrito);
      }
      console.log('Se anadio al carrito', itemCarrito);
      //console.log(this.carritoCompras)
      //console.log( "valor", this.valorCarrito())
      return this.carritoCompras;
  }

  private anadirAlContador(indice:number){
      this.carritoCompras[indice].cantidad++;
  }

  private anadirAlCarrito(item:ItemCarritoCompras){
      item.cantidad = 1;
      this.carritoCompras.splice(0,0,item);
  }


  quitarCarritoDeCompras(
    itemCarrito:ItemCarritoCompras
    ):ItemCarritoCompras[]{
    const modelo = itemCarrito.modelo;
    const cajero = itemCarrito.nombreCajero;
    let indiceItem = -1;
    const existeElItem = this.carritoCompras
        .some(
            (item:ItemCarritoCompras, indice)=>{
                if(item.modelo == modelo){
                    indiceItem = indice;
                    return true;
                }else{
                    return false;
                }
            }
        )

    if(existeElItem){
      if(itemCarrito.cantidad === 1){
        this.quitarAlCarrito(indiceItem)
      }else{
        this.quitarAlContador(indiceItem);
      }

    }
    console.log('Se quito del carrito', itemCarrito);
    //console.log(this.carritoCompras)
    //console.log("Valor",this.valorCarrito())
    return this.carritoCompras;
  }
 
  private quitarAlContador(indice:number){
    this.carritoCompras[indice].cantidad--;
  }

  private quitarAlCarrito(indice:number){
    this.carritoCompras.splice(indice,1);
  }

  valorCarrito(){
    let valor=0;
    this.carritoCompras.forEach( (itemCarrito)=>{

      valor=valor + (itemCarrito.cantidad)*(+itemCarrito.valor)
      
    } )
    return valor;
  }


  /*
  carrito=[];

  agregarAlCarrito(producto){
    const itemAgregado={
      nombre: producto.modelo,
      cantidad: "1"
    }

  }
  */
}

