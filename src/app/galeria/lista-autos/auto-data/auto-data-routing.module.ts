import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutoDataPage } from './auto-data.page';

const routes: Routes = [
  {
    path: '',
    component: AutoDataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutoDataPageRoutingModule {}
