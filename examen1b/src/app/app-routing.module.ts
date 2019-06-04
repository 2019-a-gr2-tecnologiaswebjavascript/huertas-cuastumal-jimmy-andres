import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './rutas/home/home.component';
import { RutaGruposComponent } from './rutas/ruta-grupos/ruta-grupos.component';
import { RutaRevisarComprasComponent } from './rutas/ruta-revisar-compras/ruta-revisar-compras.component';
import { RutaComprarComponent } from './rutas/ruta-comprar/ruta-comprar.component';
import { RutaGruposProductosComponent } from './rutas/ruta-grupos-productos/ruta-grupos-productos.component';
import { RutaCrearGrupoComponent } from './rutas/ruta-crear-grupo/ruta-crear-grupo.component';
import { RutaCrearProductoComponent } from './rutas/ruta-crear-producto/ruta-crear-producto.component';
import { EstaRegistradoService } from './servicios/guards/esta-registrado.service';

const routes: Routes = [
  {
    path:'home/app',
    component: HomeComponent,
    children:[
      {
        path:'revisarCompras',
        component: RutaRevisarComprasComponent,
        canActivate:[
          EstaRegistradoService
        ],
      },
      {
        path:'grupos',
        component: RutaGruposComponent,
        canActivate:[
          EstaRegistradoService
        ],
        children:[
          {
            path:'productos/:idGrupo',
            component:RutaGruposProductosComponent,
            canActivate:[
              EstaRegistradoService
            ],
            children:[
              {
                path : 'crear',
                component: RutaCrearProductoComponent,
                canActivate:[
                  EstaRegistradoService
                ],
              }
            ],
          },
          {
            path:'crearGrupo',
            component: RutaCrearGrupoComponent,
            canActivate:[
              EstaRegistradoService
            ],
          }
        ]
      },
      {
        path:'comprar',
        component: RutaComprarComponent ,
        canActivate:[
          EstaRegistradoService
        ],
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