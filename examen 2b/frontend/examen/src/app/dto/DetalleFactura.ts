import {Factura} from "./Factura";
import { Auto } from './Auto';


export interface DetalleFactura {
    "createdAt"?: number,
    "updatedAt"?: number,
    "id"?: number,
    fkFactura:number | Factura | any
    fkAuto:number | Auto | any
}





