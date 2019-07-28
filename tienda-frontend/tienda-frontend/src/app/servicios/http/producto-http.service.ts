import { HttpSailsPrincipal } from './http-sails-principal';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../../../../src/environments/environment';
import { Producto } from '../../dto/producto';


@Injectable()
export class ProductoHttpService extends HttpSailsPrincipal<Producto>{

    constructor(private readonly _htppClient:HttpClient){
        super(_htppClient, environment.url, '/Producto')
    }
    cargarArchivo(archivo:File, idProducto:number){
        //formulario virtual
        const formulario:FormData = new FormData();
        formulario.append('imagen',archivo, archivo.name);
        formulario.append('nombre','Andres');
        formulario.append('apellido','Huertas');
        formulario.append('sueldo','126');


        const cabeceras:HttpHeaders = new HttpHeaders;
        cabeceras.append('Content-Type','multipart/form-data');
        cabeceras.append('Accept','aplication/json');

        const opciones= {headers: cabeceras};

        const url=`${this.url}/cargarArchivo/${idProducto}`;

        return this.httpClient.post(url,formulario,opciones);

        

    }

}