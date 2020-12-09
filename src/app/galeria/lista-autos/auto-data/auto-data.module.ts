import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutoDataPageRoutingModule } from './auto-data-routing.module';

import { AutoDataPage } from './auto-data.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutoDataPageRoutingModule
  ],
  declarations: [AutoDataPage]
})
export class AutoDataPageModule {}
