import { HttpSailsPrincipal } from './http-sails-principal';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ProductoUsuario } from '../../dto/producto-usuario';


@Injectable()
export class ProductoUsuarioHttpService extends HttpSailsPrincipal<ProductoUsuario>{

    constructor(private readonly _htppClient:HttpClient){
        super(_htppClient, environment.url, '/ProductoUsuario')
    }
}