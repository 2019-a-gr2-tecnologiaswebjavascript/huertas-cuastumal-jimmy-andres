import { Component, OnInit } from '@angular/core';

import { UsuarioHttpService } from '../services/http/HttpUsuario.service';
import { AuthService } from '../services/Auth/auth.service';
import { Credenciales } from '../dto/Usuario';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private readonly _httpClient: HttpClient,
              private readonly _usuarioHttpService: UsuarioHttpService,
              private readonly auth:AuthService,
              ) { }
credenciales:Credenciales =  {email:'',contrasenia:''};
  ngOnInit() {
  }

  logearse() {
          console.log("usuario : ", this.credenciales.email, " contraseña: ", this.credenciales.contrasenia)

      this.auth.login(this.credenciales)

  }
}