import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  messages: string[] = ['¡Hola!', '¿Cómo estás?', '¡Que tengas un buen día!'];
  Message: string="";

  constructor(private router: Router) { }

  ngOnInit() {
    this.Message = this.messages[0]; // Mostrar el primer mensaje al inicio

    setInterval(() => {
      const index = Math.floor(Math.random() * this.messages.length);
      this.Message = this.messages[index];
      this.showBubble(); // Mostrar la burbuja cuando cambia el mensaje
    }, 5000); // Cambiar el mensaje cada 5 segundos (5000 milisegundos)
  }

  showBubble() {
    const burbuja = document.querySelector('.burbuja');
    if (burbuja) {
      burbuja.classList.add('active');
  
      // Ocultar la burbuja después de un tiempo
      setTimeout(() => {
        burbuja.classList.remove('active');
      }, 2000); // Ocultar después de 2 segundos (2000 milisegundos)
    }
  }

  Salir(){
    this.router.navigate(['/log-in']);
  }

}
