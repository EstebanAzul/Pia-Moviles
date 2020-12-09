import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaAutosPage } from './lista-autos.page';

const routes: Routes = [
  {
    path: '',
    component: ListaAutosPage
  },
  {
    path: 'auto-data',
    loadChildren: () => import('./auto-data/auto-data.module').then( m => m.AutoDataPageModule)
  },
  {
    path: 'auto-data',
    loadChildren: () => import('./auto-data/auto-data.module').then( m => m.AutoDataPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaAutosPageRoutingModule {}
