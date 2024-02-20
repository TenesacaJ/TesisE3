import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss'],
})
export class TablaComponent implements OnInit {
  datosTabla: any[] = [];
  @Input() datos: any[] = [];
  datosFormulario: any;

  constructor(private dataService: DataService, private router: Router) {}

  editarPaciente(paciente: any) {
    this.datosFormulario = paciente;
  }

  nuevoPaciente() {
    this.router.navigate(['/from']);
  }

  ngOnInit() {
    // Se suscribe a los datos del formulario del servicio DataService
    this.dataService.datosFormulario$.subscribe((datos: any) => {
      this.datosTabla = datos;
    });
  }

  seleccionarPaciente(paciente: any) {
    this.dataService.enviarDatosFormulario(paciente);
  }
}

