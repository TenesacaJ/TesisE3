import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'log-in',
    loadChildren: () => import('./View/log-in/log-in.module').then( m => m.LogInPageModule)
  },
  {
    path: '',
    redirectTo: 'log-in',
    pathMatch: 'full'
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./View/sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./View/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'data',
    loadChildren: () => import('./View/data/data.module').then( m => m.DataPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./View/home/home.module').then( m => m.HomePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
