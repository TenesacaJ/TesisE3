import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-from',
  templateUrl: './from.page.html',
  styleUrls: ['./from.page.scss'],
})
export class FromPage implements OnInit {

  formulario: FormGroup;
  nombre: string = '';
  enfermedad: string = '';
  medicina: string = '';
  dias: number = 0;
  tiempo: number = 0;
  fechaInicio: Date = new Date();
  primerGuardadoRealizado: boolean = false;
  pacientes: any[] = []; // Aquí se declara el array pacientes

  constructor(private formBuilder: FormBuilder, 
              private modalController: ModalController,
              private alertController: AlertController,
              private router: Router,
              private dataService: DataService
              ) {
    this.formulario = this.formBuilder.group({
      nombre: ['', Validators.required],
      enfermedad: ['', Validators.required],
      medicina: ['', Validators.required],
      dias: ['', Validators.required],
      tiempo: ['', Validators.required],
      fechaInicio: [this.fechaInicio.toISOString(), Validators.required]
    }); 
  }

  guardar() {
    if (this.formulario.valid) {
      const nuevoPaciente = {
        nombre: this.formulario.get('nombre')?.value,
        enfermedad: this.formulario.get('enfermedad')?.value,
        medicina: this.formulario.get('medicina')?.value,
        dias: this.formulario.get('dias')?.value,
        tiempo: this.formulario.get('tiempo')?.value,
        fechaInicio: this.formulario.get('fechaInicio')?.value,
      };
      this.pacientes.push(nuevoPaciente); // Se utiliza this.pacientes en lugar de pacientes
      this.formulario.reset();
      this.primerGuardadoRealizado = true;
      // Guardar datos del formulario
      console.log('Datos enviados desde FromPage:', nuevoPaciente);
    } else {
      this.mostrarAlerta('Campos incompletos', 'Por favor completa todos los campos.');
    }
  }
  

  async mostrarAlerta(titulo: string, mensaje: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensaje,
      buttons: ['OK']
    });
  
    await alert.present();
  }

  siguiente(){
    this.router.navigate(['/home']);
  }
  
  ngOnInit(){
    
  }

}
