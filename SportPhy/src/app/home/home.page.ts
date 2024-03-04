import { Component } from '@angular/core';
import { rutaComponent } from '../interfaces/ruta.interfaces';
import { ActionSheetController, ViewDidEnter  } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
//export class HomePage implements ViewDidEnter {
export class HomePage {


  /*ionViewDidEnter() {
    this.signUpsignIn();
  }*/
  
  menu: rutaComponent[] = [
    {
      path: '/loading',
      name: 'Loading',
      color: 'primary',
      icon: 'refresh'
    },
  ];

  constructor(
    private actionSheetController: ActionSheetController
  ) {}

  async signUpsignIn() {
    const actionSheet = await this.actionSheetController.create({
      cssClass: 'signUp-SignIn-class',
      backdropDismiss: false,
      header: 'Opciones',
      subHeader: 'Iniciar o Registrarse',
      buttons: [
        {
          text: 'Iniciar sesión',
          icon: 'log-in',
          handler: () => {
            console.log('Iniciar sesión');
          }
        },
        {
          text: 'Registrarse',
          icon: 'person-add',
          handler: () => {
            console.log('Registrarse');
          }
        }
      ]
    });
    await actionSheet.present();
  }
}
