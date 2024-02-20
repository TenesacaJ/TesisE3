import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogInPageRoutingModule } from './log-in-routing.module';

import { LogInPage } from './log-in.page';
import { InputModule } from 'src/app/Modulos/input/input.module';
import { InputComponent } from 'src/app/Componentes/input/input.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogInPageRoutingModule,
    InputModule
  ],
  declarations: [LogInPage]
})
export class LogInPageModule {}
