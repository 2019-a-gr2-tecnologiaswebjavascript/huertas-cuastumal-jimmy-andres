import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AutosPage } from './autos.page';
import { AgregarAutosPage } from '../agregar-autos/agregar-autos.page';

const routes: Routes = [
  {
    path: '',
    component: AutosPage,
  },
  {
    path: 'agregar',
    component: AgregarAutosPage,
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AutosPage, AgregarAutosPage ]
})
export class AutosPageModule {}
