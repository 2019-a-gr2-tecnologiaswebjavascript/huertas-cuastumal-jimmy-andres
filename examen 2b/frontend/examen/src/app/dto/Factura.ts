import { ItemCarritoCompras } from './ItemCarritoCompras';



export interface Factura{
    "createdAt"?: number,
    "updatedAt"?: number,
    "id"?: number,
    nombre:string,
    cedula:number,
    telefono:number,
    correo:string,
    direccion: string,
    vendedor: string,
    valor:number,    
    detalle:ItemCarritoCompras[]
}
