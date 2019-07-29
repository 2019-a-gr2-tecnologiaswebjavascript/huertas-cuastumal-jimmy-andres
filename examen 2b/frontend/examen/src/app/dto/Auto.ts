import {DetalleFactura} from "./DetalleFactura";
import { Conductor } from './Conductor';

export interface Auto{
    "createdAt"?: number,
    "updatedAt"?: number,
    "id"?: number,
    chasis:number,
    marca:string,
    color:string,
    modelo:string,
    valor:number
    fkConductor?:number | Conductor | any
    detallesDeIngrediente?: DetalleFactura
}
