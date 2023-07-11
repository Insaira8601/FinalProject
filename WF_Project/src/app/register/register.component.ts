import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule],
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
				</form>
			</div>
  `,
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

}
