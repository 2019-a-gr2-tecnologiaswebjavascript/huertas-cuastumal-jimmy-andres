import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {EstaLogeadoService} from "./services/Guards/esta-logeado.service";

const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule'},
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'autos/:idConductor', loadChildren: './autos/autos.module#AutosPageModule', },
  { path: 'agregar-cliente', loadChildren: './agregar-cliente/agregar-cliente.module#AgregarClientePageModule' },
  //{ path: 'agregar-autos', loadChildren: './agregar-autos/agregar-autos.module#AgregarAutosPageModule' },
  //{ path: 'inicio', loadChildren: './inicio/inicio.module#InicioPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    //RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
