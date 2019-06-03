import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './rutas/home/home.component';
import { RutaGruposComponent } from './rutas/ruta-grupos/ruta-grupos.component';
import { RutaRevisarComprasComponent } from './rutas/ruta-revisar-compras/ruta-revisar-compras.component';
import { RutaComprarComponent } from './rutas/ruta-comprar/ruta-comprar.component';
import { RutaGruposProductosComponent } from './rutas/ruta-grupos-productos/ruta-grupos-productos.component';
import { RutaCrearGrupoComponent } from './rutas/ruta-crear-grupo/ruta-crear-grupo.component';

const routes: Routes = [
  {
    path:'home/app',
    component: HomeComponent,
    children:[
      {
        path:'revisarCompras',
        component: RutaRevisarComprasComponent,
      },
      {
        path:'grupos',
        component: RutaGruposComponent,
        children:[
          {
            path:'productos/:idGrupo',
            component:RutaGruposProductosComponent,
          },
          {
            path:'crearGrupo',
            component: RutaCrearGrupoComponent
          }
        ],
      },
      {
        path:'comprar',
        component: RutaComprarComponent ,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    useHash:true
  })
],
  exports: [RouterModule]
})
export class AppRoutingModule { }