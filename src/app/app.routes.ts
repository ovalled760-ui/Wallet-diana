import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BilletComponent } from './billet/billet.component';

import { authGuard } from './auth.guard'; 

export const appRoutes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },


  { path: 'login', component: LoginComponent },


  { path: 'billet', component: BilletComponent, canActivate: [authGuard] },

  { path: '**', redirectTo: 'login' }
];
