import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaAutosPageRoutingModule } from './lista-autos-routing.module';

import { ListaAutosPage } from './lista-autos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaAutosPageRoutingModule
  ],
  declarations: [ListaAutosPage]
})
export class ListaAutosPageModule {}
