import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routeConfig: Routes = [
    {
      path: '',
      component: HomeComponent,
      title: 'Home page'
    },
    {
      path: 'login',
      component: LoginComponent,
      title: 'Login'
    },
    {
      path: 'register',
      component: RegisterComponent,
      title: 'Register'
    }
  ];
  
  export default routeConfig;