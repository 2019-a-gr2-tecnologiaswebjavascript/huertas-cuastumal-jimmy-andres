import {HttpEntityService} from "../http/HttpEntity.service";
import {Credenciales, Usuario} from "../../dto/Usuario";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Router} from "@angular/router";
import { EstaLogeadoService } from '../Guards/esta-logeado.service';


@Injectable()
export class AuthService extends HttpEntityService<Usuario>{
  constructor(private readonly _httpClient:HttpClient,
              private readonly _router: Router,
              private readonly _estalogeado: EstaLogeadoService){
    super(_httpClient,environment.url,"/Usuario")
  }

  currentUser:Usuario
  //logeado = false


  login(credenciales: Credenciales){
    var email = credenciales.email
    var contrasenia = credenciales.contrasenia

    super.buscarQuery(`email=${email}&contrasenia=${contrasenia}`).subscribe(
        (datos)=>{
          if(datos.length > 0){
            console.log(datos)
            this._estalogeado.estaLoggeado=true
            const url = ['/tabs/tabs/tab1']
            this._router.navigate(url)
          }
          else{
            alert("Usuario No existe")
          }


        }

    )



  }
  logout(){
    this.currentUser = null
    this._estalogeado.estaLoggeado=false
    this._router.navigate(['/login'])

  }







}

