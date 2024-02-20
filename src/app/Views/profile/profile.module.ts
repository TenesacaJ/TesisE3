import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';
import { NavBarModule } from 'src/app/Modulo/nav-bar/nav-bar.module';
import { TablaModule } from 'src/app/Modulo/tabla/tabla.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePageRoutingModule,
    NavBarModule,
    TablaModule,
  ],
  declarations: [ProfilePage]
})
export class ProfilePageModule {}
