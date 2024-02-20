import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-notificacion',
  templateUrl: './notificacion.page.html',
  styleUrls: ['./notificacion.page.scss'],
})
export class NotificacionPage implements OnInit {

  constructor(private alertController: AlertController, private navCtrl: NavController) { }

  ionViewDidEnter() {
    this.presentAlert();
    this.goBackToHomePage();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: '¡Página en desarrollo!',
      buttons: ['OK']
    });

    await alert.present();
  }

  goBackToHomePage() {
    setTimeout(() => {
      this.navCtrl.navigateRoot('/home'); // Cambia '/home' por la ruta de tu página de inicio
    }, 2000); // Cambia 2000 por la cantidad de tiempo en milisegundos que deseas esperar antes de regresar a la página de inicio
  }

  ngOnInit() {
  }

}
