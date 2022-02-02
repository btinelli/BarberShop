import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServicoFormPageRoutingModule } from './servico-form-routing.module';

import { ServicoFormPage } from './servico-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ServicoFormPageRoutingModule
  ],
  declarations: [ServicoFormPage]
})
export class ServicoFormPageModule { }
