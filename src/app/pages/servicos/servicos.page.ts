import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DataService, Servico } from 'src/app/services/data.service';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.page.html',
  styleUrls: ['./servicos.page.scss'],
})
export class ServicosPage implements OnInit {
  public title: string = 'Serviços';
  servicos: Servico[] = [];

  constructor(private dataService: DataService, public modalController: ModalController) { }

  ngOnInit() {
    this.dataService.getLancamentos().subscribe(res => {
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
