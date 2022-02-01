import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { Servico, ServicoService } from 'src/app/services/servico.service';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.page.html',
  styleUrls: ['./servicos.page.scss'],
})
export class ServicosPage implements OnInit {
  public title: string = 'Serviços';
  servicos: Servico[] = [];

  constructor(private servicoService: ServicoService, public modalController: ModalController) { }

  ngOnInit() {
    this.servicoService.getServicos().subscribe(res => {
      this.servicos = res;
    });
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}
