import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
  {
    path: '',
    title: "Home",
    component: HomeComponent
  },
  {
    path: 'register',
    title: "Register",
    component: RegisterComponent
  },
  {
    path: 'login',
    title: "Login",
    component: LoginComponent
  }
];
