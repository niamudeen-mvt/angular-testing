import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { privateAuthGuardGuard } from './guards/private-auth-guard.guard';
import { publicAuthGuardGuard } from './guards/public-auth-guard.guard';

export const protectedRoutes = ['dashboard'];
export const publicRoutes = ['', 'register', 'login'];

export const routes: Routes = [
  {
    path: '',
    title: 'Home',
    component: HomeComponent,
    canActivate: [publicAuthGuardGuard],
  },
  {
    path: 'register',
    title: 'Register',
    component: RegisterComponent,
    canActivate: [publicAuthGuardGuard],
  },
  {
    path: 'login',
    title: 'Login',
    component: LoginComponent,
    canActivate: [publicAuthGuardGuard],
  },
  {
    path: 'dashboard',
    title: 'Dashboard',
    component: DashboardComponent,
    canActivate: [privateAuthGuardGuard],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
