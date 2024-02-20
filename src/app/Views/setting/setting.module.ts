import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SettingPageRoutingModule } from './setting-routing.module';

import { SettingPage } from './setting.page';
import { NavBarModule } from 'src/app/Modulo/nav-bar/nav-bar.module';
import { Storage } from '@ionic/storage';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SettingPageRoutingModule,
    NavBarModule
  ],
  declarations: [SettingPage],
  providers: [Storage]
})
export class SettingPageModule {}
