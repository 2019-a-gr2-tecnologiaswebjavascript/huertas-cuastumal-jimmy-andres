import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaHomeComponent } from './rutas/ruta-home/ruta-home.component';
import { RutaCreditosComponent } from './rutas/ruta-creditos/ruta-creditos.component';
import { RutaProductosComponent } from './rutas/ruta-productos/ruta-productos.component';
import { RutaNoEncontradaComponent } from './rutas/ruta-no-encontrada/ruta-no-encontrada.component';
import { RutaProductosHogarComponent } from './rutas/ruta-productos-hogar/ruta-productos-hogar.component';
import { RutaProductosVideojuegosComponent } from './rutas/ruta-productos-videojuegos/ruta-productos-videojuegos.component';
import { RutaProductosVideojuegosMarvelComponent } from './rutas/ruta-productos-videojuegos-marvel/ruta-productos-videojuegos-marvel.component';
import { RutaProductosVideojuegosAccionComponent } from './rutas/ruta-productos-videojuegos-accion/ruta-productos-videojuegos-accion.component';
import { EstaLogeadoService } from './servicios/guards/esta-logeado.service';
import { AuthService } from './servicios/auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    RutaHomeComponent,
    RutaCreditosComponent,
    RutaProductosComponent,
    RutaNoEncontradaComponent,
    RutaProductosHogarComponent,
    RutaProductosVideojuegosComponent,
    RutaProductosVideojuegosMarvelComponent,
    RutaProductosVideojuegosAccionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    EstaLogeadoService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
