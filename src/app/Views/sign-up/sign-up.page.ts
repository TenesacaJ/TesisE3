import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { InputComponent } from 'src/app/Component/input/input.component';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  @ViewChildren(InputComponent) inputs!: QueryList<InputComponent>;

  isValidForm: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() { }

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
      // Mostrar error
    } else {
      // Enviar datos
    }
  }

  continuar(){
    this.router.navigate(['/from']);
  }

}
