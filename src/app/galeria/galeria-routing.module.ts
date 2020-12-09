import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GaleriaPage } from './galeria.page';

const routes: Routes = [
  {
    path: '',
    component: GaleriaPage
  },
  {
    path: 'lista-autos/:id',
    loadChildren: () => import('./lista-autos/lista-autos.module').then( m => m.ListaAutosPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GaleriaPageRoutingModule {}
