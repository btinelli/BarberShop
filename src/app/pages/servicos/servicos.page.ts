import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    private formBuilder: FormBuilder,
    public toastController: ToastController) { }

  servicoForm = this.formBuilder.group({
    descricao: ['', Validators.required],
    valor: ['', Validators.required]
  })

  ngOnInit() {
    this.servicoService.getServicos().subscribe(res => {
      this.servicos = res;
    });
  }

  dismiss() {

    this.modalController.dismiss({
      'dismissed': true
    });
  }

  async presentSuccessToast() {
    const toast = await this.toastController.create({
      message: 'Adicionado com sucesso.',
      duration: 2000
    });
    toast.present();
  }

  async presentErrorToast() {
    const toast = await this.toastController.create({
      message: 'Erro ao salvar.',
      duration: 2000
    });
    toast.present();
  }

  salvar() {
    let newServico: Servico = { descricao: this.servicoForm.get('descricao').value, valor: this.servicoForm.get('valor').value, criadoEm: new Date().toLocaleString() }
    this.servicoService.addServico(newServico).then(res => {
      this.dismiss()
      this.presentSuccessToast()
    }).catch(error => {
      this.presentErrorToast()
    })
  }
}
