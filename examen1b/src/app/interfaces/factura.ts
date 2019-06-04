import { ItemCarritoCompras } from './item-carrito-compras';

export interface factura{
    nombre:string,
    cedula:number,
    telefono:number,
    correo:string,
    direccion: string,
    vendedor: string,
    valor:number,
    detalle:ItemCarritoCompras[]
}