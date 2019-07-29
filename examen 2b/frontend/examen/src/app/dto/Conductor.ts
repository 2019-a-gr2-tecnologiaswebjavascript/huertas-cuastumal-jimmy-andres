import { Factura } from './Factura';

export interface Conductor{
    "createdAt"?: number,
    "updatedAt"?: number,
    "id"?: number,
    "nombre": string,
    "apellido": string,
    "numeroAutos": number,
    "licenciaValida":boolean,
    facturasDeConductor?: Factura[] | any,
}
