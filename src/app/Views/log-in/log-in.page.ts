import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { InputComponent } from 'src/app/Component/input/input.component';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
})
export class LogInPage implements OnInit {

  @ViewChildren(InputComponent) inputs!: QueryList<InputComponent>;

  isValidForm: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  validateForm() {
    this.isValidForm = true;
    this.inputs.forEach(input => {
      if (!input.value) {
        this.isValidForm = false;
        return;
      }
    });
  }

  onSubmit() {
    this.validateForm();
    if (!this.isValidForm) {
      console.log('El formulario no es válido');
    } else {
      console.log('Enviando datos del formulario...');
    }
  }

  continuar(){
    this.router.navigate(['/home']);
  }

}
