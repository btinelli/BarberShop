
import { Component, OnInit } from '@angular/core';

import { ModalController, ToastController } from '@ionic/angular';

import { Servico, ServicoService } from 'src/app/services/servico.service';


@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.page.html',
  styleUrls: ['./servicos.page.scss'],
})
export class ServicosPage implements OnInit {
  public title: string = 'Serviços'
  public servicos: Servico[] = []


  constructor(private servicoService: ServicoService,
    public modalController: ModalController,
    public toastController: ToastController) { }



  ngOnInit() {
    this.servicoService.getServicos().subscribe(res => {
      this.servicos = res;
    });
  }


}
