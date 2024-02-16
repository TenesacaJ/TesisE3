import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonInput } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {

  enfermedades: string[] = [
    'Hipertensión arterial',
    'Diabetes',
    'Artritis',
    'Osteoporosis',
    'Demencia',
    'Depresión',
    'Enfermedad cardiovascular',
    'Enfermedad de Parkinson',
    'Problemas de audición',
    'Problemas de visión',
    'Incontinencia urinaria',
  ];
  
  @ViewChild('fileInput', { static: false }) fileInput!: ElementRef<HTMLInputElement>;

  rutaImagen: string = 'https://www.researchgate.net/publication/315108532/figure/fig1/AS:472492935520261@1489662502634/Figura-2-Avatar-que-aparece-por-defecto-en-Facebook.png';

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

  selectorFoto() {
    // Mostrar el selector de archivos al hacer clic en el ion-avatar
    if (this.fileInput) {
      this.fileInput.nativeElement.click();
    }
  }

  onFileSelected(event: any) {
    // Manejar la selección de archivo aquí
    const file: File = event.target.files[0];
    if (file) {
      // Actualizar la ruta de la imagen
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.rutaImagen = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

}
