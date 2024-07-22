import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './service/auth-guard.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const protectedRoutes = ['dashboard'];
export const publicRoutes = ['', 'register', 'login'];

export const routes: Routes = [
  {
    path: '',
    title: 'Home',
    component: HomeComponent,
  },
  {
    path: 'register',
    title: 'Register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    title: 'Login',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    title: 'Dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
