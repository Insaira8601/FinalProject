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
    <main class="content">
    <div class="userInfo" align="right">
        <a [routerLink]="['/login']"><p class="inline"><b>Login</b></p></a>
        <a [routerLink]="['/register']"><p class="inline"><b>Register</b></p></a>  
    </div>
    <div class="center-image" align="center-image">
        <img src="https://th.bing.com/th/id/OIP.IZbotS_lEAh-V9QHwOhPTAHaFQ?pid=ImgDet&rs=1" alt="Home Image"/>
    </div>
    <div class="title-headings">
        <h1>Trial Home-Page</h1>
    </div>
</main>

<footer>
    <h3>@Copyright GROUP 3</h3>
</footer>
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
