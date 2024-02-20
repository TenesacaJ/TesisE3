import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'log-in',
    loadChildren: () => import('./Views/log-in/log-in.module').then( m => m.LogInPageModule)
  },
  {
    path: '',
    redirectTo: 'log-in',
    pathMatch: 'full'
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./Views/sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'from',
    loadChildren: () => import('./Views/from/from.module').then( m => m.FromPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./Views/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'setting',
    loadChildren: () => import('./Views/setting/setting.module').then( m => m.SettingPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./Views/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'notificacion',
    loadChildren: () => import('./Views/notificacion/notificacion.module').then( m => m.NotificacionPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }) 
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
