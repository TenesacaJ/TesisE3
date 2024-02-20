import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaComponent } from 'src/app/Component/tabla/tabla.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [TablaComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  exports: [TablaComponent]
})
export class TablaModule { }
