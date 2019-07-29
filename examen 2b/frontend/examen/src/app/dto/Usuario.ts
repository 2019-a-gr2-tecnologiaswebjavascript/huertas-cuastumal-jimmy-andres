import {Factura} from "./Factura";

export interface Usuario{
    "createdAt"?: number,
    "updatedAt"?: number,
    "id"?: number,
    "nombre": string,
    "cedula": string,
    "email": string,
    "contrasenia":string
    facturasDeUsuario: Factura[] | any,
}


export interface Credenciales{
    "email"?: string,
    "contrasenia"?:string
}
