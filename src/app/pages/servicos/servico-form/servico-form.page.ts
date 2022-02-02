import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { Servico, ServicoService } from 'src/app/services/servico.service';

@Component({
  selector: 'app-servico-form',
  templateUrl: './servico-form.page.html',
  styleUrls: ['./servico-form.page.scss'],
})
export class ServicoFormPage implements OnInit {

  public title: string = 'Novo Serviço'
  private currentAction: string
  servicoForm: FormGroup


  constructor(private servicoService: ServicoService,
    public modalController: ModalController,
    private formBuilder: FormBuilder,
    public toastController: ToastController,
    public router: Router,
    public route: ActivatedRoute) { }



  ngOnInit() {
    console.log(this.route.snapshot.url[0])
    this.setCurrentAcion()
    this.buildForm()
  }

  ngAfterContentChecked() {
    this.setPageTitle()
  }

  private setCurrentAcion() {

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log(event)
      }
    })


    // if (this.route.snapshot.url[0].path == 'new') {
    //   this.currentAction = 'new'
    // } else {
    //   this.currentAction = 'edit'
    // }
  }
  private setPageTitle() {
    if (this.currentAction == 'new') {
      this.title = 'Novo serviço'
    } else {
      this.title = 'Editar serviço'
    }
  }

  private buildForm() {

    this.servicoForm = this.formBuilder.group({
      descricao: ['', Validators.required],
      valor: ['', Validators.required]
    })
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

  private actionSuccess() {
    this.presentSuccessToast()
    this.servicoForm.reset()
    this.router.navigateByUrl('servicos')
  }

  save() {
    let newServico: Servico = { descricao: this.servicoForm.get('descricao').value, valor: this.servicoForm.get('valor').value }
    this.servicoService.addServico(newServico).then(res => {
      this.actionSuccess()
    }).catch(error => {
      this.presentErrorToast()
    })
  }

}
