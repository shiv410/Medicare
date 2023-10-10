import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email!: string;
  password!: string;
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }


  // onLogin() {
  //   const emailId = this.email; // Assuming this.email contains the email ID.
  //   const password = this.password; // Assuming this.password contains the password.

  //   this.authService.login(emailId, password)
  //     .subscribe({
  //       next: (data) => {
  //         console.log("logged in", data);
  //       }, error: error => {
  //         console.error('cannot log in');
  //       }
  //     })
  // }

  onLogin() {
    this.authService.login(this.email, this.password).subscribe({
      next: (data) => {
        console.log('Logged in successfully', data);
        if (data.role === 'admin') {
          console.log('Navigating to admin dashboard');
          this.router.navigate(['/admin']);
        } else {
          this.router.navigate(['/customer']);
        }
      },
      error: error => {
        console.error('Cannot login in', error);
      },
      // complete: () => {
      //   console.log('Login Complete');
      // }
    });
  }

}
