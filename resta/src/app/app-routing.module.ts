import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'resta',
    loadChildren: () => import('./resta/resta.module').then( m => m.RestaPageModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then( m => m.UserPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'signupr',
    loadChildren: () => import('./signupr/signupr.module').then( m => m.SignuprPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'loginr',
    loadChildren: () => import('./loginr/loginr.module').then( m => m.LoginrPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'restaprofile',
    loadChildren: () => import('./restaprofile/restaprofile.module').then( m => m.RestaprofilePageModule)
  },
  {
    path: 'restamenu',
    loadChildren: () => import('./restamenu/restamenu.module').then( m => m.RestamenuPageModule)
  },
  {
    path: 'restasetings',
    loadChildren: () => import('./restasetings/restasetings.module').then( m => m.RestasetingsPageModule)
  },
  {
    path: 'appointments',
    loadChildren: () => import('./appointments/appointments.module').then( m => m.AppointmentsPageModule)
  },
  {
    path: 'appointments-modal',
    loadChildren: () => import('./appointments-modal/appointments-modal.module').then( m => m.AppointmentsModalPageModule)
  },
  {
    path: 'datafromuser',
    loadChildren: () => import('./datafromuser/datafromuser.module').then( m => m.DatafromuserPageModule)
  },
  {
    path: 'cart/:id',
    loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'reg-resta',
    loadChildren: () => import('./reg-resta/reg-resta.module').then( m => m.RegRestaPageModule)
  },
  {
    path: 'forgot',
    loadChildren: () => import('./forgot/forgot.module').then( m => m.ForgotPageModule)
  },  {
    path: 'user-profile',
    loadChildren: () => import('./user-profile/user-profile.module').then( m => m.UserProfilePageModule)
  },
  {
    path: 'edituserprof',
    loadChildren: () => import('./edituserprof/edituserprof.module').then( m => m.EdituserprofPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
