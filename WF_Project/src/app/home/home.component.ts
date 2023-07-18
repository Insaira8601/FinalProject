import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
  ],
  template: ` 
    <p>home works!</p>
    <a [routerLink]="['/login']"><p>Login</p></a>
    <a [routerLink]="['/register']"><p>Register</p></a>    
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
