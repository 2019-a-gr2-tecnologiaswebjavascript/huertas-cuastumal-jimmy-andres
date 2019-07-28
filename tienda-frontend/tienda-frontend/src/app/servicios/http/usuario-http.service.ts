import { HttpSailsPrincipal } from './http-sails-principal';
import { Usuario } from '../../dto/usuario';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../src/environments/environment';


@Injectable()
export class UsuarioHttpService extends HttpSailsPrincipal<Usuario>{

    constructor(private readonly _htppClient:HttpClient){
        super(_htppClient, environment.url, '/Usuario')
    }

   
}