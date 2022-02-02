import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';



import { ServicosPage } from './servicos.page';
import { ServicosPageRoutingModule } from '../servicos-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ServicosPageRoutingModule
  ],
  declarations: [ServicosPage]
})
export class ServicosPageModule { }
