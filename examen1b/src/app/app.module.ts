import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './rutas/home/home.component';
import { RutaGruposComponent } from './rutas/ruta-grupos/ruta-grupos.component';
import { RutaComprarComponent } from './rutas/ruta-comprar/ruta-comprar.component';
import { RutaRevisarComprasComponent } from './rutas/ruta-revisar-compras/ruta-revisar-compras.component';
import { RutaGruposProductosComponent } from './rutas/ruta-grupos-productos/ruta-grupos-productos.component';
import { RutaCrearGrupoComponent } from './rutas/ruta-crear-grupo/ruta-crear-grupo.component';
import { AgregarGrupoService } from './servicios/agregar-grupo/agregar-grupo.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RutaGruposComponent,
    RutaComprarComponent,
    RutaRevisarComprasComponent,
    RutaGruposProductosComponent,
    RutaCrearGrupoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AgregarGrupoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
