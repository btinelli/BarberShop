import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicosPage } from './servicos-list/servicos.page';



const routes: Routes = [
  {
    path: '',
    component: ServicosPage
  },
  {
    path: 'new',
    loadChildren: () => import('./servico-form/servico-form.module').then(m => m.ServicoFormPageModule)
  },
  {
    path: 'edit/:id',
    loadChildren: () => import('./servico-form/servico-form.module').then(m => m.ServicoFormPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicosPageRoutingModule { }
