import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    //canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then( m => m.UserPageModule)
  },
  {
    path: 'resta',
    loadChildren: () => import('./resta/resta.module').then( m => m.RestaPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'forget-password',
    loadChildren: () => import('./forget-password/forget-password.module').then( m => m.ForgetPasswordPageModule)
  },
  {
    path: 'page-not-found',
    loadChildren: () => import('./page-not-found/page-not-found.module').then( m => m.PageNotFoundPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signupr',
    loadChildren: () => import('./signupr/signupr.module').then( m => m.SignuprPageModule)
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
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'datafromuser',
    loadChildren: () => import('./datafromuser/datafromuser.module').then( m => m.DatafromuserPageModule)
  },
  {
    path: 'restamenu',
    loadChildren: () => import('./restamenu/restamenu.module').then( m => m.RestamenuPageModule)
  },
  {
    path: 'restprofile',
    loadChildren: () => import('./restprofile/restprofile.module').then( m => m.RestprofilePageModule)
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
    path: 'resta-profile',
    loadChildren: () => import('./resta-profile/resta-profile.module').then( m => m.RestaProfilePageModule)
  },
  {
    path: 'resta-profile',
    loadChildren: () => import('./resta-profile/resta-profile.module').then( m => m.RestaProfilePageModule)
  },
  {
    path: 'restasettings',
    loadChildren: () => import('./restasettings/restasettings.module').then( m => m.RestasettingsPageModule)
  },
  {
    path: 'group',
    loadChildren: () => import('./group/group.module').then( m => m.GroupPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
