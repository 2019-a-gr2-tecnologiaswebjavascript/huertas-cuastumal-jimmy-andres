import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UsuarioHttpService } from './servicios/http/usuario-http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'tienda-frontend';

  constructor(private readonly _httpClient: HttpClient,
              private readonly _usuarioHttpService:UsuarioHttpService){

  }

  ngOnInit (){

    const usuarioCrear$ =this._usuarioHttpService.crear({nombre:"Felipe",apellido:"Caicedo"});
    const usuarioEliminar$ = this._usuarioHttpService.borrar(65);
/*
    usuarioCrear$
    .subscribe(
      (nuevoUsuario)=>{
        console.log('Usuario Eliminado',nuevoUsuario);
      },
      (error)=>{
        console.log(error)
      }
    );
*/
    usuarioEliminar$
    .subscribe(
      (usuarioEliminado)=>{
        console.log('Usuario Eliminado',usuarioEliminado);
      },
      (error)=>{
        console.log(error);
      }
    )

    const url = environment.url + "/Usuario"
    const listaUsuarios$ = this._httpClient.get(url);

    listaUsuarios$
      .subscribe(
        (datos)=>{
          console.log(datos);
        },
        (error)=>{
          console.log(error);
        }
      )
  }

}
