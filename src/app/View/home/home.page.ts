import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  fechaHora: string = '';
  listaEnfermedades: string[] = [
    'Hipertensión arterial',
    'Diabetes',
    'Artritis',
    'Osteoporosis',
    'Demencia'
    // Agrega más enfermedades según sea necesario
  ];

  constructor(private alertController: AlertController) { }

  async mostrarAlerta() {
    const alert = await this.alertController.create({
      header: 'Información de la lista de enfermedades',
      message: this.fechaHora,
      inputs: this.listaEnfermedades.map(enfermedad => ({
        type: 'radio', // Cambiar a 'radio' para que no sea editable
        label: enfermedad,
        value: enfermedad,
        checked: false
      })),
      buttons: ['Edit', 'Close']
    });
  
    await alert.present();
  }

}
