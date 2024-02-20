import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {

  modoOscuro: boolean = false;
  idioma: string = 'es';
  tamanioFuente: number = 16;
  fuenteLetra: string = 'sans-serif';
  notificaciones: boolean = true;

  constructor(private storage: Storage, private router: Router) { }

  async ngOnInit() {
    // Cargar configuración previa desde el almacenamiento local
    this.modoOscuro = await this.storage.get('modoOscuro') || false;
    this.idioma = await this.storage.get('idioma') || 'es';
    this.tamanioFuente = await this.storage.get('tamanioFuente') || 16;
    this.fuenteLetra = await this.storage.get('fuenteLetra') || 'sans-serif';
    this.notificaciones = await this.storage.get('notificaciones') || true;
    await this.storage.create();
  }

  async guardarConfiguracion() {
    // Guardar configuración en el almacenamiento local
    await this.storage.set('modoOscuro', this.modoOscuro);
    await this.storage.set('idioma', this.idioma);
    await this.storage.set('tamanioFuente', this.tamanioFuente);
    await this.storage.set('fuenteLetra', this.fuenteLetra);
    await this.storage.set('notificaciones', this.notificaciones);
    
  }

  onClick(){
    this.router.navigate(['/profile']);
  }

}
