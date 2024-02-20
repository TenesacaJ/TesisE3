import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from 'src/app/Component/modal/modal.component';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  nombre: string = "";
  edad: string = "";
  genero: string = "";
  datosPaciente: any;

  @ViewChild('fileInput', { static: false }) fileInput!: ElementRef<HTMLInputElement>;

  rutaImagen: string = 'https://www.researchgate.net/publication/315108532/figure/fig1/AS:472492935520261@1489662502634/Figura-2-Avatar-que-aparece-por-defecto-en-Facebook.png';

  constructor(private modalCtrl: ModalController, private dataService: DataService, private router: Router) {}

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: ModalComponent
    });
    modal.present();

    const { data } = await modal.onWillDismiss();
    if (data) {
      this.nombre = data.name;
      this.edad = data.age;
      this.genero = data.sex;
    }
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

  onPacienteAgregado(event: any) {
    console.log('Nuevo paciente agregado:', event);
  }

  ngOnInit() {
    this.dataService.datosFormulario$.subscribe((datos: any) => {
      console.log('Datos recibidos en ProfilePage:', datos);
      this.datosPaciente = datos;
    });
  }

  onClick(){
    this.router.navigate(['/setting']);
  }

}
