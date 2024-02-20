import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private datosFormularioSource = new Subject<any>();
  datosFormulario$ = this.datosFormularioSource.asObservable();

  constructor() { }

  enviarDatosFormulario(datos: any) {
    this.datosFormularioSource.next(datos);
  }
}
