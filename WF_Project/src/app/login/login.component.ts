import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="center-form">
			<form name="iform" method="post" onsubmit="return login()">
				<h1>Login</h1>
				<br>
				<input name="email" type="text" placeholder="Email">
				<br>
				<input name="password" type="password" placeholder="Password">
				<br>
				<button type="reset">Reset</button>
				<button onclick="signUp()"><a id="redirect" href="home.html">Submit</a></button>
			</form>
		</div>
  `,
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

}
