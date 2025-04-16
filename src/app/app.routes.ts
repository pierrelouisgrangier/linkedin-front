import { Routes } from '@angular/router';
import { AllComponent } from './all/all.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'all', component: AllComponent },
  { path: '', component: AllComponent },
];
