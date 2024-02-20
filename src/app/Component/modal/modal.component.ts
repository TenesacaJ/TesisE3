import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent  implements OnInit {

  name: string = "";
  age: string = "";
  sex: string = "";

  ageOptions: string[] = [];

  constructor(private modalCtrl: ModalController) {
    for (let i = 18; i <= 75; i++) {
      this.ageOptions.push(`${i} años`);
    }
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    const data = {
      name: this.name,
      age: this.age,
      sex: this.sex
    };
    return this.modalCtrl.dismiss(data, 'confirm');
  }

  ngOnInit() {}

}
