import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FromPageRoutingModule } from './from-routing.module';

import { FromPage } from './from.page';
import { InputModule } from 'src/app/Modulo/input/input.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FromPageRoutingModule,
    InputModule,
    ReactiveFormsModule
  ],
  declarations: [FromPage],
  exports: [FromPage]
})
export class FromPageModule {}
