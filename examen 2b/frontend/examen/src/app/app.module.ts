import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UsuarioHttpService } from './services/http/HttpUsuario.service';
import { AuthService } from './services/Auth/auth.service';
import { EstaLogeadoService } from './services/Guards/esta-logeado.service';
import { HttpConductorService } from './services/http/HttpConductor.service';
import { HttpAutoService } from './services/http/HttpAuto.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, FormsModule],
  providers: [
    StatusBar,
    SplashScreen,
    UsuarioHttpService,
    AuthService,
    EstaLogeadoService,
    HttpConductorService,
    HttpAutoService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
