import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div id="welcome" class="center-form">
				<form name="iform" method="post" onsubmit="return signUp()">
					<h1>Sign Up</h1>
					<br>
					<input name="first" type="text" id="first" placeholder="First Name">
					<br>
					<input name="last" type="text" id="last" placeholder="Last Name">
					<br>
					<input name="email" type="text" placeholder="Email">
					<br>
					<input name="password" type="password" placeholder="Password">
					<br>
					<input name="repassword" type="password" placeholder="Confirm Password">
					<br>
					<button type="reset">Reset</button>
					<button onclick="signUp()">Submit</button>
					<h1> Already have an account: <a [routerLink]="['/login']">Click Here</a></h1>
				</form>
			</div>
  `,
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

}
